/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#FBD784",
        optional: "#000000",
        offwhite: "#F4F5F5",
        sectioncolor: "#EEF4FA",
      },
      fontFamily: {
        sans: ["Open Sans"],
        man: ["Manrope"],
      },
      fontSize: {
        font64: "64px",
        font19: "19px",
      },
    },
  },
  plugins: [],
};
