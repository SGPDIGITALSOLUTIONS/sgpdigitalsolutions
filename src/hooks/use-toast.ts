"use client"

// Inspired by react-hot-toast library
import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000

type ToasterToast = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}

type Toast = Omit<ToasterToast, "id" | "open" | "onOpenChange">

type State = {
  toasts: ToasterToast[]
}

type Action =
  | {
      type: "ADD_TOAST"
      toast: ToasterToast
    }
  | {
      type: "UPDATE_TOAST"
      toast: Partial<ToasterToast> & { id: string }
    }
  | {
      type: "DISMISS_TOAST"
      toastId?: string
    }
  | {
      type: "REMOVE_TOAST"
      toastId?: string
    }

interface ToastContextType {
  state: State
  dispatch: React.Dispatch<Action>
  addToRemoveQueue: (toastId: string) => void
}

const ToastContext = React.createContext<ToastContextType>({
  state: { toasts: [] },
  dispatch: () => null,
  addToRemoveQueue: () => null,
})

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const genId = (() => {
  let count = 0
  return () => {
    return (++count).toString()
  }
})()

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, {
    toasts: [],
  })

  const addToRemoveQueue = React.useCallback((toastId: string) => {
    if (toastTimeouts.has(toastId)) {
      return
    }

    const timeout = setTimeout(() => {
      toastTimeouts.delete(toastId)
      dispatch({
        type: "REMOVE_TOAST",
        toastId: toastId,
      })
    }, TOAST_REMOVE_DELAY)

    toastTimeouts.set(toastId, timeout)
  }, [])

  React.useEffect(() => {
    return () => {
      toastTimeouts.forEach((timeout) => {
        clearTimeout(timeout)
      })
      toastTimeouts.clear()
    }
  }, [])

  const value = React.useMemo(
    () => ({
      state,
      dispatch,
      addToRemoveQueue,
    }),
    [state, addToRemoveQueue]
  )

  return React.createElement(ToastContext.Provider, { value }, children)
}

export function useToast() {
  const { state, dispatch, addToRemoveQueue } = React.useContext(ToastContext)

  const toast = React.useCallback(
    (props: Toast) => {
      const id = genId()

      const update = (props: ToasterToast) =>
        dispatch({
          type: "UPDATE_TOAST",
          toast: { ...props, id },
        })

      const dismiss = () => {
        addToRemoveQueue(id)
        dispatch({ type: "DISMISS_TOAST", toastId: id })
      }

      dispatch({
        type: "ADD_TOAST",
        toast: {
          ...props,
          id,
          open: true,
          onOpenChange: (open) => {
            if (!open) dismiss()
          },
        },
      })

      return {
        id,
        dismiss,
        update,
      }
    },
    [dispatch, addToRemoveQueue]
  )

  return {
    toasts: state.toasts,
    toast,
    dismiss: (toastId?: string) => {
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((t) => addToRemoveQueue(t.id))
      }
      dispatch({ type: "DISMISS_TOAST", toastId })
    },
  }
}
