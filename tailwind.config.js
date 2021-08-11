module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4361ee",
        primaryDark: "#3b3f5c",
        lightGray: "#F5F5F5",
        blueDark: "#0e1726",
        blueDarkLight: "#495057",
        grayLightest: "#f1f2f3",
      },
      fontFamily: {
        display: "Nunito",
      },
      minHeight: {
        6: "24px",
      },
      screens: {
        exsm: "590px",
      },
      width: {
        120: "480px",
      },
      minWidth: {
        100: "100px",
        370: "370px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
