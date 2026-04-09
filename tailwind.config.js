/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./*.html",
    "./components/**/*.html",
    "./js/**/*.js",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        playfair: ['"Playfair Display"', 'serif'],
        lato: ['"Lato"', 'sans-serif'],
      },
      colors: {
        // bg color
        primaryBg: '#121212',
        cardSection: '#1E1E1E',

        // text color
        primaryTeks: '#F5F5F5',
        secondaryTeks: '#B0B0B0',

        // Ui color 
        primaryUi: '#1F3A5F',
        important: '#D97904',

        // Aksen color
        neutralColor: '#4A6F46',
        emphasisColor: '#8C1C13',

        // overlay
        overlayHero: '#243A5E',

        // divider / border
        divider: '#2A2A2A',
      },
    },
  },
  plugins: [],
}

