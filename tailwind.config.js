/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display'", "sans-serif"],
      },
    },
  },
  plugins: [],
}

