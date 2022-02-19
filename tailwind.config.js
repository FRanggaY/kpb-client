module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      heights: {
        '500': '500px',
      },
      width: {
        '44': '44rem',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
