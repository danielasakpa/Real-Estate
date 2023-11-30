/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Lato': ["Lato"],
        'Bebas': ["Bebas Neue"],
        'Barlow': ["Barlow Condensed"],
        'Arimo': ["Arimo"],
        'Questrial': ["Questrial"],
        'Archivo': ["Archivo Black"],
      },
      maxWidth: {
        '2/3': '90%',
      },
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: []
};
