/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'green': '0 0 0 3px rgb(187 247 208)',
        'tooltip': '0 2px 20px rgba(5,5,5,.08)',
        'input': '0px 0px 0px 1px rgba(16, 163, 127, 1)',
      }
    }
  },
  plugins: [],
}

