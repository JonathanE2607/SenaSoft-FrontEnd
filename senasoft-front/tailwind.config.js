/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo':'#55E116',
        'links': '#FA6132',
        'fondo2': '#F8F9FF',
      }
    },
  },
  plugins: [],
}

