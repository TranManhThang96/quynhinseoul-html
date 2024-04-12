/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './**/*.{html,js}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        main: '#89B2DE',
        main2: '#F7A1A7'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
