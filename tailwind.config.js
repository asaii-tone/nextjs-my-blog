module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "uiro-pink": "#e8aaa3",
      "ice-ivory": "#f3deb9",
      "japan-tea": "#aeac78",
      "cocoa-form": "#ece4e1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
