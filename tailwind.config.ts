import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Neobrutalism Color Palette
        'terminal-black': '#000000',
        'terminal-dark': '#0a0a0a',
        'terminal-grey': '#1a1a1a',
        'terminal-border': '#2a2a2a',
        'terminal-white': '#ffffff',
        'terminal-green': '#00ff88',
        'terminal-green-bright': '#00ffaa',
        'terminal-green-dark': '#00cc66',
        'terminal-cyan': '#00ffff',
        'terminal-blue': '#0088ff',
        'terminal-purple': '#8844ff',
        'terminal-pink': '#ff44aa',
        'terminal-yellow': '#ffff00',
        'terminal-red': '#ff4444',
        
        // Neo elements with terminal colors
        'neo-terminal-card': '#111111',
        'neo-terminal-accent': '#222222',
        
        // Legacy colors for compatibility
        'neo-cream': '#FFF8E8',
        'neo-peach': '#FFD6CC',
        'neo-coral': '#FF9999',
        'neo-lavender': '#E6CCFF',
        'neo-mint': '#CCFFE6',
        'neo-sky': '#CCE6FF',
        'neo-butter': '#FFFF99',
        'neo-rose': '#FFCCDD',
        'neo-sage': '#D4E6CD',
        'neo-charcoal': '#2D2D2D',
        'neo-ink': '#1A1A1A',
        'neo-shadow': '#000000',
        
        // Legacy SGP color
        'sgp-green': '#00ff88',
      },
      fontFamily: {
        'terminal-mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
        'terminal-sans': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        'neo-mono': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
        'neo-sans': ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'neo': '4px',        // More square/geometric for terminal aesthetic
        'neo-lg': '8px',
        'neo-xl': '12px',
        'terminal': '2px',   // Very minimal rounding
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #ffffff',
        'neo-lg': '6px 6px 0px 0px #ffffff',
        'neo-xl': '8px 8px 0px 0px #ffffff',
        'neo-hover': '2px 2px 0px 0px #ffffff',
        'neo-pressed': '1px 1px 0px 0px #ffffff',
        'terminal-glow': '0 0 10px rgba(0, 255, 136, 0.5)',
        'terminal-glow-strong': '0 0 20px rgba(0, 255, 136, 0.8)',
        'terminal-border': 'inset 0 0 0 2px #00ff88',
      },
      animation: {
        'neo-bounce': 'neo-bounce 0.3s ease-in-out',
        'neo-wiggle': 'neo-wiggle 0.5s ease-in-out infinite',
        'terminal-glow': 'terminal-glow 2s ease-in-out infinite alternate',
        'terminal-scan': 'terminal-scan 3s linear infinite',
        'door-open': 'door-open 1s ease-in-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      keyframes: {
        'neo-bounce': {
          '0%, 100%': { 
            transform: 'translateY(0) scale(1)',
          },
          '50%': { 
            transform: 'translateY(-2px) scale(1.01)',
          },
        },
        'neo-wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-0.5deg)' },
          '75%': { transform: 'rotate(0.5deg)' },
        },
        'terminal-glow': {
          '0%': { 
            'box-shadow': '0 0 5px rgba(0, 255, 136, 0.5)',
            'text-shadow': '0 0 5px rgba(0, 255, 136, 0.5)'
          },
          '100%': { 
            'box-shadow': '0 0 15px rgba(0, 255, 136, 0.8)',
            'text-shadow': '0 0 10px rgba(0, 255, 136, 0.8)'
          },
        },
        'terminal-scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'door-open': {
          '0%': { 
            opacity: '0',
            transform: 'translateX(0)',
          },
          '1%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(100%)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'neo-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'terminal': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-400': {
          'animation-delay': '400ms',
        },
        '.neo-terminal-element': {
          'border': '3px solid #ffffff',
          'border-radius': '4px',
          'box-shadow': '4px 4px 0px 0px #ffffff',
          'transition': 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          'background': '#000000',
        },
        '.neo-terminal-element:hover': {
          'transform': 'translate(-2px, -2px)',
          'box-shadow': '6px 6px 0px 0px #ffffff',
        },
        '.neo-terminal-element:active': {
          'transform': 'translate(1px, 1px)',
          'box-shadow': '2px 2px 0px 0px #ffffff',
        },
        '.terminal-grid-line': {
          'border': '1px solid #00ff88',
          'background': 'linear-gradient(90deg, transparent 0%, #00ff88 50%, transparent 100%)',
          'height': '1px',
          'opacity': '0.3',
        },
        '.terminal-text-glow': {
          'text-shadow': '0 0 10px rgba(0, 255, 136, 0.8)',
        },
        '.terminal-border-glow': {
          'box-shadow': '0 0 10px rgba(0, 255, 136, 0.5), inset 0 0 10px rgba(0, 255, 136, 0.1)',
        },
      })
    })
  ],
}

export default config 