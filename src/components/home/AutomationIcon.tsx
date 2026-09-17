import type { ReactNode, SVGProps } from 'react';

export type AutomationIconName =
  | 'arrow' | 'play' | 'check' | 'chart' | 'receipt'
  | 'file' | 'people' | 'bell' | 'workflow' | 'menu' | 'close';

type Props = SVGProps<SVGSVGElement> & { name: AutomationIconName };

/** Small, decorative icons. Meaning is always supplied by adjacent text. */
export default function AutomationIcon({ name, ...props }: Props) {
  const paths: Record<AutomationIconName, ReactNode> = {
    arrow: <><path d="M4 12h15M13 5l7 7-7 7" /></>,
    play: <path d="m9 5 11 7-11 7V5Z" fill="currentColor" stroke="none" />,
    check: <path d="m5 12 4 4L19 6" />,
    chart: <><path d="M4 4v16h16M9 15v-4M14 15V7M19 15v-7" /></>,
    receipt: <><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3ZM9 7h6M9 11h6M9 15h3" /></>,
    file: <><path d="M14 3H6v18h12V7l-4-4ZM14 3v5h4M9 12h6M9 16h6" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M19 8v6M16 11h6" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" /></>,
    workflow: <><rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h6a3 3 0 0 1 3 3v6M15 18H9a3 3 0 0 1-3-3V9" /></>,
    menu: <path d="M4 6h16M4 12h16M4 18h16" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
  };
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.65" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      {paths[name]}
    </svg>
  );
}
