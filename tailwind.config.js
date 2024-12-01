/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hoverColor: "#ffeda6",
        brightColor: "#29234F",
        backgroundColor: "#1d1643",
      },
    },
  },
  plugins: [],
}

