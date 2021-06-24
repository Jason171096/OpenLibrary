// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
      'header-image': "url('/src/img/background.jpg')",
     })},
     colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      brown: {
        brown: '#433333',
        white: '#645454'
       },
     },
     fontFamily: {
       body: ['Ruluko']
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}