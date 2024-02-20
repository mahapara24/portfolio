/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Open Sans", "sans-serif"],
        plugins: [
          require("tailwind-scrollbar-hide"),
          // ...
        ],
      },

      colors: {
        "primary-gray": "#000000",
        "dark-gray": "#111111",
        "secondary-gray": "#3E3E4B",
        "custom-red": "#40D1FF",
      },
    },
  },
  plugins: [],
};
