/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['monospace'],
      },
      boxShadow: {
        'custom-btn': 'rgb(24, 49, 83) 0px 6px 0px 0px',
        'custom-btn-h': 'rgb(24, 49, 83) 0px 4px 0px 0px',
        'custom-card': '#525252 0px 6.16px 0px 0px',
      }
    },
  },
  plugins: [],
}

