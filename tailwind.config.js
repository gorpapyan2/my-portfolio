/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'btn-gradient': 'linear-gradient(to right,rgb(166, 255, 0), #28A745)',
        'gradient-soft': 'linear-gradient(to bottom, #ADD8E6, #90EE90)',
        'main-gradient': 'linear-gradient(to bottom, #ADD8E6, #90EE90)',
        'grid-pattern': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        background: '#0a0a0f',
        customYellow: '#dbe938',
        btnFallback: '#007BFF',
        softBlue: '#ADD8E6',
        lightGreen: '#90EE90',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        'accent-strong': 'rgb(var(--accent-strong) / <alpha-value>)',
        'accent-ink': 'rgb(var(--accent-ink) / <alpha-value>)',
      },
      animation: {
        'pulse-grid': 'pulseGrid 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 10s ease infinite',
        'text-pop': 'textPop 0.3s ease-in-out',
        'card-fade': 'cardFadeIn 0.8s ease-out forwards',
        'icon-pop': 'iconPop 0.6s cubic-bezier(0.25, 1.5, 0.5, 1) forwards',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        pulseGrid: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      typography: {
        invert: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            code: {
              backgroundColor: 'rgb(255 255 255 / 0.1)',
              color: 'rgb(var(--accent))',
              padding: '0.125rem 0.25rem',
              borderRadius: '0.375rem',
              fontWeight: '600',
            },
            pre: {
              backgroundColor: 'rgb(255 255 255 / 0.05)',
              borderRadius: '0.75rem',
              border: '1px solid rgb(255 255 255 / 0.1)',
              padding: '1rem',
              overflowX: 'auto',
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              borderRadius: '0',
            },
            h1: {
              letterSpacing: '-0.025em',
              fontWeight: '700',
            },
            h2: {
              letterSpacing: '-0.025em',
              fontWeight: '700',
            },
            h3: {
              fontWeight: '600',
            },
            img: {
              borderRadius: '0.75rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            table: {
              overflowX: 'auto',
              width: '100%',
            },
            'table thead': {
              borderBottomWidth: '1px',
              borderColor: 'rgb(255 255 255 / 0.1)',
            },
            'table tbody tr': {
              borderBottomWidth: '1px',
              borderColor: 'rgb(255 255 255 / 0.1)',
            },
            'table td, table th': {
              padding: '0.75rem 1rem',
            },
            blockquote: {
              borderLeftColor: 'rgb(var(--accent))',
              opacity: '0.8',
            },
            a: {
              color: 'rgb(var(--accent))',
              textDecoration: 'underline',
              textDecorationThickness: '1px',
              textUnderlineOffset: '0.25rem',
              '&:hover': {
                color: '#fff',
              },
            },
            li: {
              marginTop: '0.25rem',
              marginBottom: '0.25rem',
            },
            'li::marker': {
              color: 'rgb(var(--accent))',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
