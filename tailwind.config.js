/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        creme: "#FAF7F0",   // custom cream color
        primary: "#0A0A0A", // your scrolled header color
        accent: "#FF9A00",
        "accent-hover": "#FF7A00",
      }
    },
  },
  plugins: [],
};
