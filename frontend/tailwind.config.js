/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // Changed to include all files in src
    "./app/**/*.{js,ts,jsx,tsx}",  // Added app directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}