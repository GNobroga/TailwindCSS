const plugin = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      addUtilities({
        '.go-to-right': {
          marginLeft: '200px',
        }
      });
    }),
  ],
}

