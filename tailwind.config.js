/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A94064",
        secondary: "#4A5AF9",
        accent: "#17BEBB",
        dark: "#f2f2f2",
        light: "#212121",
        "card-bg": "#FDF0F5",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
