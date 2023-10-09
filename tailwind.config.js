/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#2F3192",
        subColor: "#17197C",
        yellowish: "#FFC43A"
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}