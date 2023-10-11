/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode classes

  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans'], // 'sans' is a generic fallback font
    },
    backgroundColor: {
      'dark-mode': '#333', // Define dark mode background color
    },
    textColor: {
      'dark-mode': '#fff', // Define dark mode text color
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
};
