/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        cssScan: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
},
      animation: {
        fadeIn: 'fade-in 1s forwards',
        fadeOut: 'fade-out 1s forwards'
      },
      colors: {
        primary: {
          50: "#fff4ed",
          100: "#ffe6d5",
          200: "#fecaaa",
          300: "#fea473",
          400: "#fc743b",
          500: "#fa541c",
          600: "#eb350b",
          700: "#c3240b",
          800: "#9b1e11",
          900: "#7c1c12",
          950: "#430b07",
        },
        secondary: {
          50: "#eeeeee",
        },
      },
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};
