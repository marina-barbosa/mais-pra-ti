/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.custom-button': {
          color: '#fff',
          backgroundColor: '#1f2937',
          borderRadius: '0.375rem',
          fontWeight: '500',
          fontSize: '0.875rem',
          padding: '0.5rem 1.25rem',
          marginRight: '0.5rem',
          marginBottom: '0.5rem',
          transition: 'background-color 0.2s',
        },
      });
    },
  ],
}