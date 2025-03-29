/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          dark: '#2D1B69',
          darker: '#1A103F',
        },
      },
    },
  },
  plugins: [],
};