/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Open Sans", "sans-serif"],
      },
      colors: {
        "primary-gray": "#000000",
        "dark-gray": "#111111",
        "secondary-gray": "#3E3E4B",
        "custom-red": "#40D1FF",
      },
      boxShadow: {
        "glow-custom-red": "0 0 10px 2px rgba(64, 209, 255, 0.8)",
      },
      textShadow: {
        "glow-custom-red": "0 0 10px 2px rgba(64, 209, 255, 0.8)", // Define the text shadow
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
