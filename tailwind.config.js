/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          800: '#1a202c',
          900: '#171923',
        },
        lightBlue: '#63b3ed',
      },
    },
  },
  plugins: [],
}
