import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#1a1b2e',
        'bg-alt': '#16213e',
        surface: '#0f3460',
        border: '#1f2b47',
        accent: '#e94560',
        accent2: '#533483',
        cyan: '#00d4ff',
        yellow: '#ffd700',
        text: '#a9b1d6',
        'text-bright': '#c0caf5',
        'text-dim': '#565f89',
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        glitch: 'glitch 0.4s steps(2) infinite',
        scanPulse: 'scanPulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        neonFlicker: 'neonFlicker 2s linear infinite',
        cyberPulse: 'cyberPulse 2s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%': { clipPath: 'inset(40% 0 61% 0)', transform: 'translate(-2px, 0)' },
          '20%': { clipPath: 'inset(92% 0 1% 0)', transform: 'translate(2px, 0)' },
          '40%': { clipPath: 'inset(43% 0 1% 0)', transform: 'translate(1px, 0)' },
          '60%': { clipPath: 'inset(25% 0 58% 0)', transform: 'translate(-1px, 0)' },
          '80%': { clipPath: 'inset(54% 0 7% 0)', transform: 'translate(2px, 0)' },
          '100%': { clipPath: 'inset(58% 0 43% 0)', transform: 'translate(-2px, 0)' },
        },
        scanPulse: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.06' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': { opacity: '1' },
          '20%, 24%, 55%': { opacity: '0.4' },
        },
        cyberPulse: {
          '0%, 100%': { boxShadow: '0 0 5px var(--tw-shadow-color)' },
          '50%': { boxShadow: '0 0 20px var(--tw-shadow-color), 0 0 40px var(--tw-shadow-color)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
      },
      backgroundImage: {
        'cyber-grid':
          'linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)',
        'hero-gradient':
          'radial-gradient(ellipse at center, rgba(233,69,96,0.15) 0%, rgba(26,27,46,0) 70%)',
        'card-gradient':
          'linear-gradient(180deg, transparent 0%, rgba(26,27,46,0.95) 100%)',
      },
    },
  },
  plugins: [],
}

export default config
