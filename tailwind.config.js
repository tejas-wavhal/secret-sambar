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
        mainOrange: "#FDC998",
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
// colors: {
//   main: {
//     100: "#93C8BF",
//     200: "#7BA29B"
//   }
// },