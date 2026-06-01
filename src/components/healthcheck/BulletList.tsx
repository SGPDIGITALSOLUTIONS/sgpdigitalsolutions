interface BulletListProps {
  items: string[];
  className?: string;
}

export default function BulletList({ items, className = '' }: BulletListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-terminal-white/85">
          <svg
            className="w-5 h-5 text-terminal-green flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
