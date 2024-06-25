/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {
      colors: {
        cblack: '#000500',
        cteal: '#839788',
        csand: '#EEE0CB',
      },
      keyframes: {
        'bounce-once': {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      animation: {
        'bounce-once': 'bounce-once 1s 1',
        'bounce-once-delayed': 'bounce-once 0s 1, bounce-once 1s 1s',
      },
    },
  },
  plugins: [],
}

