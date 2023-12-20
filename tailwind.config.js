/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'green': '0 0 0 3px rgba(16,163,127,.3)',
        'tooltip': '0 2px 20px rgba(5,5,5,.08)',
      }
    }
  },
  plugins: [],
}

