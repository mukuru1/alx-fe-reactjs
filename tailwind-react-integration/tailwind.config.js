module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: "class", 
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled', 'customVariant'],
    },
  },
  plugins: [],
};


