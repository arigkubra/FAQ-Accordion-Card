/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{html,js}"],
  theme: {
    extend: {boxShadow: {
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.7)',
    },
      colors: {
      'softV': 'hsl(273, 75%, 66%)',
      'softB': 'hsl(240, 73%, 65%)',
      'lightGrayishWhite': 'hsl(240, 5%, 91%)',
      'lightGrayishGrey': 'hsl(240, 6%, 50%)',
      'darkGrayishGrey': 'hsl(237, 12%, 33%)',
      'veryDarkGrayishGrey': 'hsl(238, 29%, 16%)',
      'lightRed': 'hsl(14, 88%, 65%)',
    },
    fontFamily: {
      'kumbh': ['Kumbh Sans', 'sans-serif'],
    },},
  },
  plugins: [],
}

