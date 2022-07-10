/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-violet": "#7655e3",
        "dark-transparent": "#23272acc",
        "transparent-violet": "#7655e322",
        "red-attractifs": "#fd3356",
        "discord-blurple": "#5865F2",
      },
      listStyleType: {
        circle: "circle"
      },
      maxWidth: {
        60: "240px"
      },
      backgroundImage: {
        "dragon-bg": "url(https://i.imgur.com/4oFKBnF.jpeg)",
      },
      fontFamily: {
        sans: ["Whitney", "Bahnschrift", "Helvetica", "sans-serif"]
      }
    },
  },
  plugins: [],
}