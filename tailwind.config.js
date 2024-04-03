/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'], 
        'lexend': ['Lexend', 'sans-serif'],
      }, 
    },
  },
  plugins: [],
}