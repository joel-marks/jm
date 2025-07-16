/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./content/**/*.{md,html}",
    "./layouts/**/*.{html,js}",
    "./assets/**/*.{css,js}",
    "./themes/blowfish/layouts/**/*.{html,js}",
    "./themes/blowfish/content/**/*.{md,html}",
    "./themes/blowfish/assets/**/*.{css,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
