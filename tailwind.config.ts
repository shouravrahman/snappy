import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#5c6ac4",
				secondary: "#ecc94b",
				background: "#000",
				text: "#fff",
				accent: "#5c5bc3",
			},
		},
	},
	plugins: [],
};
export default config;
