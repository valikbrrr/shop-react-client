/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        atma: ["Atma", "cursive"],
        inria: ["Inria Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
