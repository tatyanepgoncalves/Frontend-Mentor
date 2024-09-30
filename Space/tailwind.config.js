/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Bellefair", "system-ui"],
      secondary: ["Barlow Condensed", "system-ui"],
      tertiary: ["Barlow", "system-ui"],
    },
    colors: {
      black: "#0b0d17",
      blue: "#d0d6f9",
      white: "#fff"
    }
  },
  plugins: [],
}