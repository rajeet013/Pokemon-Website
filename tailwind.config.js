/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {     // 👈 FIXED
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {   // 👈 FIXED
        '70/30': '70% 30%',
      },
    },
  },
  plugins: [],
}
