/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      screens: {
        'maxPro': '430px',
        'iphoneXr': '390px'
      },
      colors: {
        'lightCoral': '#E68383',
        'englishViolet': '#444054'
      },
      backgroundColor: {
        'englishViolet': '#444054',
        'lightCoral': '#E68383',
      },
      width: {
        '81': '81.396%',
        '69': '69.428%',
      },
      padding: {
        '18': '40%'
      },
     
      spacing: {
        '22': '88px',
        '193': '192.79px'
      },
      fontSize: {
        '7xl': '56px', 
      }
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: ["./src/**/*.{js,jsx,ts,tsx}"],
//     theme: {
//     extend: {
//     colors: {
//     primary: "#2C6EB8",
//     secondary: "#7BA8DC",
//     secondaryLight: "#A4C5EB",
//     accent: "#C9E1FD",
//     error: "#DC7B7B",
//     info: "#FCFCFC",
//     },
//     fontSize: {
//     headingDesktop: ["64px", "auto"],
//     headingTablet: ["56px", "auto"],
//     headingMobile: ["48px", "auto"],
//     subHeadingDesktop: ["36px", "auto"],
//     subHeadingTablet: ["32px", "auto"],
//     subHeadingMobile: ["24px", "auto"],
//     paragraphMobile: ["16px", "auto"],
//     paragraphTablet: ["20px", "auto"],
//     paragraphDesktop: ["24px", "auto"],
//     caption: ["12px", "auto"],
//     },
//     dropShadow: {
//     default: "0px 0px 1px rgba(0, 0, 0, 0.35)",
//     hover: "8px 8px .5px rgba(0, 0, 0, 0.35)",
//     active: "3px 3px .1px rgba(0, 0, 0, 0.55)",
//     },
//     // [8px_8px_1.5px_rgba(0,0,0,0.35)]
//     boxShadow: {
//     default: "8px 8px 1.5px 0px rgba(0, 0, 0, 0.15)",
//     hover: "6px 6px 1px 0px rgba(0, 0, 0, 0.15)",
//     active: "3px 3px .5px 0px rgba(0, 0, 0, 0.15)",
//     },
//     },
//     },
//     plugins: [],
//     };
