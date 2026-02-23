/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#f7d9d9',
        'brand-rose': '#c8a2c8',
        'brand-cream': '#f5f5f0',
        'brand-dark': '#4a4a4a',
      }
    },
  },
  plugins: [],
}
