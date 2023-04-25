/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#62b4ff",
          500: "#349eff",
        },
        "main-txt": "#455560",
      },
    },
  },
  plugins: [],
};
