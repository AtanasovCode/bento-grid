/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-purple-100": "hsl(254, 88%, 90%)",
        "custom-purple-500": "hsl(256, 67%, 59%)",

        "custom-yellow-100": "hsl(31, 66%, 93%)",
        "custom-yellow-500": "hsl(39, 100%, 71%)",

        "custom-black": "hsl(0, 0%, 7%)",
        "custom-white": "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        "sans": "DM Sans"
      }
    },
  },
  plugins: [],
}