/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        mobile: { max: '639px' }, // targets screens <640px
      }
    },
  },
  plugins: [],
}