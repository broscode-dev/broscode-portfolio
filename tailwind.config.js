/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
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
