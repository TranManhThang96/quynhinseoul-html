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
        main: '#B67949',
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
