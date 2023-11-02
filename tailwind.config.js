/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Open Sans', 'sans-serif']
      },
      colors: {
        'primary-gray': '#23263A',
        'dark-gray': '#212336',
        'secondary-gray': '#2B2D41',
        'custom-red': '#FF4A57',
      },
    },
    
  },
  plugins: [],
}