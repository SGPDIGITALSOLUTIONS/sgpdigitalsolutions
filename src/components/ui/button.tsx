import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neo-butter disabled:pointer-events-none disabled:opacity-50 border-3 border-neo-charcoal rounded-neo cursor-pointer select-none",
  {
    variants: {
      variant: {
        default:
          "bg-neo-coral text-neo-ink shadow-neo hover:bg-red-400 hover:shadow-neo-hover active:shadow-neo-pressed hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]",
        destructive:
          "bg-red-500 text-neo-cream shadow-neo hover:bg-red-600 hover:shadow-neo-hover active:shadow-neo-pressed hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]",
        outline:
          "bg-neo-cream text-neo-ink shadow-neo hover:bg-neo-peach hover:shadow-neo-hover active:shadow-neo-pressed hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]",
        secondary:
          "bg-neo-lavender text-neo-ink shadow-neo hover:bg-purple-300 hover:shadow-neo-hover active:shadow-neo-pressed hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]",
        ghost: 
          "bg-transparent border-transparent text-neo-ink hover:bg-neo-peach hover:border-neo-charcoal hover:shadow-neo hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]",
        link: 
          "bg-transparent border-transparent text-neo-coral underline-offset-4 hover:underline hover:text-red-400 shadow-none hover:shadow-none",
        accent:
          "bg-neo-mint text-neo-ink shadow-neo hover:bg-green-300 hover:shadow-neo-hover active:shadow-neo-pressed hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]",
        butter:
          "bg-neo-butter text-neo-ink shadow-neo hover:bg-yellow-300 hover:shadow-neo-hover active:shadow-neo-pressed hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
