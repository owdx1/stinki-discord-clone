/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');


module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  darkMode:'class', // bunu sonradan ekle
  theme: {
    extend: {
      colors:{
        primary:'#202225',
        secondary:'#5865f2',
      
      }
    },
  },
  plugins: [],
}

