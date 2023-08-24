/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    colors: {
      primary: "#F1F1F0",
      secondary: "#E68383",
      tertiary: "#444054",
      blue: {
        100: "#EBF8FF",
        200: "#BEE3F8",
        300: "#90CDF4",
        400: "#63B3ED",
        500: "#4299E1",
        600: "#3182CE",
        700: "#2B6CB0",
        800: "#2C5282",
        900: "#2A4365",
      },
    },
    extend: {
      fontFamily: {
        main: ["Quicksand", "sans-serif"],
      },
      screens: {
        maxPro: "430px",
        iphoneXr: "390px",
        samsungS8: "360px",
      },
      width: {
        81: "81.396%",
        69: "69.428%",
      },
      padding: {
        18: "40%",
      },

      spacing: {
        22: "88px",
        193: "192.79px",
      },
      fontSize: {
        "7xl": "56px",
      },
    },
  },
  plugins: [],
};
