module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4361ee",
        primaryDark: "#3b3f5c",
      },
      fontFamily: {
        'display': 'Nunito'
      },
      minHeight:{
        '6':'24px',
      },
      screens:{
        'exsm':'590px',
      },
      width:{
        '120':'480px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
