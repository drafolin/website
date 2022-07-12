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
        "dark-gray": "#23272a",
        "dark-transparent": "#23272acc",
        "transparent-violet": "#7655e322",
        "red-attractifs": "#fd3356",
        "discord-blurple": "#5865F2",
        "paper-white": "#dad8d7",
      },
      spacing: {
        "header-height": "104px",
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
      },
      animation: {
        "menu-open-anim": "menu-open 0.5s ease-in-out forwards",
        "menu-close-anim": "menu-close 0.5s ease-in-out forwards",
      },
      keyframes: {
        "menu-open": {
          "from": {
            "top": "104px",
          },
          "to": {
            "top": "-160vh",
          }
        },
        "menu-close": {
          "from": {
            "top": "-160vh",
          },

          "to": {
            "top": "104px",
          }
        }
      },
      zIndex: {
        "m1": "-1",
        "m2": "-2",
      },
      boxShadow: {
        "sandwiched": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1), inset 0 4px 6px -4px rgb(0 0 0 / 0.1)"
      }
    },
  },
  plugins: [],
}