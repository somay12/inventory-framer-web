import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#FAFAF9',
        surface: '#FFFFFF',
        subtle: '#F4F4F2',
        border: '#E7E5E4',
        'text-primary': '#0C0A09',
        'text-secondary': '#57534E',
        'text-muted': '#A8A29E',
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
        },
        accent: {
          emerald: '#10B981',
          amber: '#F59E0B',
        },
        dark: {
          bg: '#0B0B10',
          surface: '#12121A',
        },
      },
      borderRadius: {
        card: '24px',
        button: '12px',
        image: '20px',
        pill: '9999px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.04), 0 12px 32px -12px rgba(16,16,40,0.12)',
        glow: '0 0 0 0 rgba(99,102,241,0), 0 1px 2px rgba(0,0,0,0.04), 0 12px 32px -12px rgba(16,16,40,0.12)',
        'glow-brand': '0 0 20px -5px rgba(99,102,241,0.35), 0 1px 2px rgba(0,0,0,0.04)',
        'glow-dark': '0 0 20px -5px rgba(99,102,241,0.25), 0 1px 2px rgba(0,0,0,0.2)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      fontSize: {
        'display': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '600' }],
        'heading-xl': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-lg': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading-md': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(16,185,129,0.06) 0%, transparent 50%)',
        'dark-gradient': 'linear-gradient(180deg, #0B0B10 0%, #12121A 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}

export default config
