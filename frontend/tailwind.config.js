/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'synth-dark': '#121212',
        'synth-neon': '#00f2ff',
        'synth-accent': '#ff0055'
      }
    },
  },
  plugins: [],
}
