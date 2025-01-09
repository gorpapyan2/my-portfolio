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
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        background: '#0a0a0f',
        customYellow: '#dbe938',
        btnFallback: '#007BFF',
        softBlue: '#ADD8E6',
        lightGreen: '#90EE90',
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
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}