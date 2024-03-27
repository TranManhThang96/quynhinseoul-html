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
      },
      backgroundImage: {
        'm-header': "url('/public/images/header-m.webp')",
        'header': "url('/public/images/header.webp')",
        'm-update-monthly': "url('/public/images/update-month/m-update-monthly.webp')",
        'update-monthly': "url('/public/images/update-month/update-monthly.webp')",
        'm-project': "url('/public/images/projects/m-pj-bg.webp')",
        'project': "url('/public/images/projects/pj-bg.webp')",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
