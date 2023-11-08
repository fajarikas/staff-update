/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"],
      "montserrat": ["Montserrat", "sans-serif"],
    },
    colors: {
      'biru': '#0B4784',
      'biru-2': '#4969A5',
      'orange': '#FB7D5B',
      'biru-font': '#303972',
      'abu-font': '#C1BBEB',
      'abu': '#A098AE',
      'kuning': '#FCC43E',
      'background-color': '#F3F4FF',
      'merah': '#C70039',
      'hijau': '#186F65',
      'hijau-1': '#4CAF4F',
      'white': '#FFFFFF',
    }
  },
  // plugins: [require("daisyui")],
  // daisyui: {
  //   themes: false
  // }
}
