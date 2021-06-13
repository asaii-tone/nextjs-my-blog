module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        fit: "repeat(auto-fit, 22rem)",
      },
      spacing: {
        68: "17rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
      },
    },
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
