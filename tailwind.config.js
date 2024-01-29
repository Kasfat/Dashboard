/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  experimental: {
    // ...
    applyComplexClasses: true,
  },
  theme: {
    extend: {},
  },
  plugins: [],
}