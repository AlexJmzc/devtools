const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */


module.exports = {
  content: ["./src/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1B2223",
        secondary: "#3A4F50",
        tertiary: "#0EF6CC",
        quaternary: "#F4FEFD",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
};
