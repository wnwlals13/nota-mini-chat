/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray1: 'rgb(var(--gray1))',
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'rgb(var(--secondary))',
          foreground: 'rgb(var(--secondary-foreground))',
        },
      },
      keyframes: {
        'dot-bounce': {
          '0%, 100%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        'dot-bounce': 'dot-bounce 1.2s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
