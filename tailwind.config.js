/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./code/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'opensans': ['"Open Sans"', 'sans-serif'],
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}

