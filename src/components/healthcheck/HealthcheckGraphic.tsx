type GraphicVariant =
  | 'clock'
  | 'goblin'
  | 'spreadsheet'
  | 'automation'
  | 'invoice';

interface HealthcheckGraphicProps {
  variant: GraphicVariant;
  className?: string;
}

const stroke = 'currentColor';
const fill = 'none';

export default function HealthcheckGraphic({
  variant,
  className = 'w-full max-w-xs mx-auto text-terminal-green',
}: HealthcheckGraphicProps) {
  switch (variant) {
    case 'clock':
      return (
        <svg
          viewBox="0 0 200 200"
          className={className}
          aria-hidden
          role="img"
        >
          <circle
            cx="100"
            cy="100"
            r="70"
            stroke={stroke}
            strokeWidth="4"
            fill={fill}
          />
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="55"
            stroke={stroke}
            strokeWidth="4"
            strokeLinecap="square"
          />
          <line
            x1="100"
            y1="100"
            x2="135"
            y2="115"
            stroke={stroke}
            strokeWidth="4"
            strokeLinecap="square"
          />
          <rect
            x="155"
            y="35"
            width="28"
            height="20"
            stroke={stroke}
            strokeWidth="3"
            fill="var(--terminal-dark)"
          />
          <text x="162" y="49" fontSize="10" fill={stroke}>
            @
          </text>
          <rect
            x="20"
            y="140"
            width="32"
            height="24"
            stroke={stroke}
            strokeWidth="3"
            fill="var(--terminal-dark)"
          />
          <line x1="24" y1="148" x2="48" y2="148" stroke={stroke} strokeWidth="2" />
          <line x1="24" y1="154" x2="48" y2="154" stroke={stroke} strokeWidth="2" />
          <path
            d="M30 95 L45 80 L60 95"
            stroke="var(--terminal-yellow)"
            strokeWidth="3"
            fill={fill}
          />
          <text x="38" y="92" fontSize="14" fill="var(--terminal-yellow)">
            !
          </text>
        </svg>
      );

    case 'goblin':
      return (
        <svg
          viewBox="0 0 120 120"
          className={className}
          aria-hidden
          role="img"
        >
          <ellipse
            cx="60"
            cy="75"
            rx="35"
            ry="30"
            stroke={stroke}
            strokeWidth="3"
            fill="var(--terminal-dark)"
          />
          <circle
            cx="60"
            cy="45"
            r="28"
            stroke={stroke}
            strokeWidth="3"
            fill="var(--terminal-dark)"
          />
          <path
            d="M35 40 Q30 25 45 30"
            stroke={stroke}
            strokeWidth="3"
            fill={fill}
          />
          <path
            d="M85 40 Q90 25 75 30"
            stroke={stroke}
            strokeWidth="3"
            fill={fill}
          />
          <circle cx="50" cy="42" r="4" fill={stroke} />
          <circle cx="70" cy="42" r="4" fill={stroke} />
          <path
            d="M48 55 Q60 62 72 55"
            stroke={stroke}
            strokeWidth="2"
            fill={fill}
          />
          <rect
            x="45"
            y="88"
            width="30"
            height="22"
            stroke={stroke}
            strokeWidth="2"
            fill="var(--terminal-grey)"
          />
          <path
            d="M10 60 Q5 45 20 50 M110 60 Q115 45 100 50"
            stroke="var(--terminal-cyan)"
            strokeWidth="2"
            fill={fill}
            strokeDasharray="4 4"
          />
          <path
            d="M95 70 L115 55 M95 80 L118 80 M95 90 L115 105"
            stroke="var(--terminal-pink)"
            strokeWidth="2"
          />
        </svg>
      );

    case 'spreadsheet':
      return (
        <svg
          viewBox="0 0 120 120"
          className={className}
          aria-hidden
          role="img"
        >
          <rect
            x="25"
            y="30"
            width="70"
            height="75"
            stroke={stroke}
            strokeWidth="3"
            fill="var(--terminal-dark)"
          />
          <line x1="25" y1="48" x2="95" y2="48" stroke={stroke} strokeWidth="2" />
          <line x1="45" y1="30" x2="45" y2="105" stroke={stroke} strokeWidth="2" />
          <line x1="65" y1="30" x2="65" y2="105" stroke={stroke} strokeWidth="2" />
          <line x1="25" y1="65" x2="95" y2="65" stroke={stroke} strokeWidth="1" />
          <line x1="25" y1="82" x2="95" y2="82" stroke={stroke} strokeWidth="1" />
          <path
            d="M55 8 L65 18 L75 8 L70 8 L70 22 L60 22 L60 8 Z"
            fill="var(--terminal-yellow)"
            stroke={stroke}
            strokeWidth="2"
          />
          <text x="58" y="20" fontSize="8" fill="var(--terminal-black)">
            AF
          </text>
        </svg>
      );

    case 'automation':
      return (
        <svg
          viewBox="0 0 240 100"
          className={className}
          aria-hidden
          role="img"
        >
          <rect
            x="5"
            y="25"
            width="35"
            height="45"
            stroke={stroke}
            strokeWidth="2"
            fill="var(--terminal-dark)"
          />
          <rect
            x="45"
            y="35"
            width="30"
            height="35"
            stroke={stroke}
            strokeWidth="2"
            fill="var(--terminal-dark)"
          />
          <text x="12" y="50" fontSize="10" fill={stroke}>
            @
          </text>
          <path
            d="M85 50 L115 50"
            stroke="var(--terminal-cyan)"
            strokeWidth="3"
            markerEnd="url(#arrow)"
          />
          <defs>
            <marker
              id="arrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="4"
              orient="auto"
            >
              <path d="M0,0 L8,4 L0,8 Z" fill="var(--terminal-cyan)" />
            </marker>
          </defs>
          <rect
            x="125"
            y="20"
            width="100"
            height="60"
            stroke={stroke}
            strokeWidth="3"
            fill="var(--terminal-dark)"
            rx="4"
          />
          <path
            d="M140 45 L155 60 L175 35"
            stroke="var(--terminal-green)"
            strokeWidth="3"
            fill={fill}
          />
          <circle cx="195" cy="40" r="8" stroke={stroke} strokeWidth="2" fill={fill} />
          <path
            d="M191 40 L194 43 L199 36"
            stroke="var(--terminal-green)"
            strokeWidth="2"
          />
        </svg>
      );

    case 'invoice':
      return (
        <svg
          viewBox="0 0 200 80"
          className={className}
          aria-hidden
          role="img"
        >
          <rect
            x="10"
            y="15"
            width="45"
            height="55"
            stroke={stroke}
            strokeWidth="3"
            fill="var(--terminal-dark)"
          />
          <line x1="18" y1="28" x2="47" y2="28" stroke={stroke} strokeWidth="2" />
          <line x1="18" y1="38" x2="40" y2="38" stroke={stroke} strokeWidth="2" />
          <line x1="18" y1="48" x2="45" y2="48" stroke={stroke} strokeWidth="2" />
          <path
            d="M75 25 L75 55 L95 55 Q105 55 105 45 Q105 35 95 35 L85 35 L85 25 Z"
            stroke="var(--terminal-yellow)"
            strokeWidth="3"
            fill="var(--terminal-dark)"
          />
          <rect
            x="120"
            y="20"
            width="40"
            height="45"
            stroke={stroke}
            strokeWidth="3"
            fill="var(--terminal-dark)"
          />
          <line x1="128" y1="32" x2="152" y2="32" stroke={stroke} strokeWidth="2" />
          <line x1="128" y1="42" x2="148" y2="42" stroke={stroke} strokeWidth="2" />
          <circle
            cx="175"
            cy="42"
            r="18"
            stroke="var(--terminal-green)"
            strokeWidth="3"
            fill={fill}
          />
          <path
            d="M168 42 L173 47 L182 36"
            stroke="var(--terminal-green)"
            strokeWidth="3"
            fill={fill}
          />
        </svg>
      );
  }
}
