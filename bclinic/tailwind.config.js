/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        perDigit: "perDigit",
        vazirReg: "vazirReg",
        vazirMedium: "vazirMedium",
        vazirSemibold: "vazirSemibold",
        vazirBold: "vazirBold",
        vazirBlack: "vazirBlack",
      },
    },
  },
  plugins: [],
};
