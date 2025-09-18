/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tacteng: ["Tacteng", "sans-serif"],
        khmer: ["KhmerBoran", "serif"],
      },
    },
  },
  plugins: [],
}