/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'green': '0 0 0 3px rgba(16,163,127,.3)',
      }
    }
  },
  plugins: [],
}

