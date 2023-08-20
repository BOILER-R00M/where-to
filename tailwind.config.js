/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		colors: {
			primary: "#F1F1F0",
			secondary: "#E68383",
			tertiary: "#444054",
		},
		extend: {
			fontFamily: {
				main: ["Quicksand", "sans-serif"],
			},

			screens: {
				maxPro: "430px",
				iphoneXr: "390px",
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
