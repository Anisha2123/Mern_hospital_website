/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'pink': "#be185d",
        'white': "#ffffff",
        'grey': "#71717a",
        'l':"#EADDE4",
      },
    },
  },
  plugins: [],
};
