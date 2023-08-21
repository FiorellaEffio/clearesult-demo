/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
      }
    },
  },
  screens: {
    sm: "768px",
    md: "1200px",
  },
  plugins: [],
}
