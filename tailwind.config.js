/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      colors: {
        color1: '#f4f4f4',
        color2: '#e4e4e4',
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
