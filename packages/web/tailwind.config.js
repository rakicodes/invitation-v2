/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    colors: {
      pink: "#b25674",
      lightpink: "#f3ccd9",
      white: "#fff9fb",
    }
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "../ui/**/*.jsx",
  ],
  plugins: [],
};
