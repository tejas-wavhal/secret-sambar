/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mainOrange: {
          100: "#FEE9D6",
          200: "#FDC998",
        },
        mainGreen: "#2E7037",
        mainGray: "#333333",
        // font-family: 'Montserrat', sans-serif;
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        caveat: ['Caveat', 'cursive']
      }
    },
  },
  plugins: [],
}