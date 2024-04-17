/** @type {import('tailwindcss').Config} */
import config from "@ui/tailwind.config";

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"../ui/**/*.jsx",
		"../ui/tailwind.config.js",
	],
	plugins: [],
};
