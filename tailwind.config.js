/** @type {import('tailwindcss').Config} */



export default {
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans'], // 'sans' is a generic fallback font
    },
  },
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



