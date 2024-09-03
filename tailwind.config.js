/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#1ab69d',
        'primary-dark': '#31b978',
      },
    },
  },
  plugins: [],
}

