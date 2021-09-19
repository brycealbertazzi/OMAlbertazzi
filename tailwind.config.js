module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            // Put custom colors here:
            "button-main": "#2eb379",
            "button-main-hover": "#30f291",
            "button-tabbar": "#2ea3b3",
            "button-tabbar-hover": "#30f2e9"
        }
    },
    container: {
        center: true,
        padding: "1rem",
        screens: {
            lg: "1124px",
            xl: "1424px",
            "2xl": "1948px",
            "3xl": "2300px"
        },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
