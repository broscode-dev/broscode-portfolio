/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#0A0A0A",
          text: "#EEE5E0",
        },
      },
    },
    fontFamily: {
      redhat: ["Red Hat Display", "sans-serif"],
      leaguegothic: ["League Gothic", "sans-serif"],
      leaguespartan: ["League Spartan", "sans-serif"],
      shadowsintolight: ["Shadows Into Light", "cursive"],
    },
  },
  plugins: [],
};
