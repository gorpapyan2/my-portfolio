/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#4F46E5',
        background: '#0a0a0f',
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
    },
  },
  plugins: [],
}