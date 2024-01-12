/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary' : '#e8edff',
        'secondary': '#20263a',
      }
    },
  },
  plugins: [],
}

