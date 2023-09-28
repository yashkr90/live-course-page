/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      
      // => @media (min-width: 768px) { ... }
    },
    extend: {
      colors: {
        "primary-60": "#007bff",
        white: "#fff",
        whitesmoke: "#ededed",
        crimson: "#ea2424",
        gold: "#fcde5a",
        "background-03": "#f1f2f6",
        "background-02": "#fff",
        "neutral-100": "#080e14",
        dimgray: "#52565b",
        royalblue: "#007bff",
        "primary-60": "#007bff",

        darkslategray: "#00364e",
        whitesmoke: "#f1f2f6",
        indianred: "#d85a6e",
        "neutral-100": "#080e14",
        "neutral-60": "#6b6e72",
        "neutral-70": "#52565b",
        lightsalmon: "#ffad7a",
        darkseagreen: "#8ec37a",
        aliceblue: "#e6f2ff",
        "background-02": "#fff",
        "success-60": "#d6f4de",
        forestgreen: "#169c38",
        "tertiary-10": "#ffe4cc",
        "tertiary-60": "#ff7a00",
        "neutral-70": "#52565b",
        black: "#000",
        "neutral-100": "#080e14",
        "neutral-40": "#9c9fa1",
        whitesmoke: "#f3f3f3",
        "background-04": "#d4e9ff",
        "neutral-40": "#9c9fa1",
        "neutral-100": "#080e14",
        "neutral-70": "#52565b",
        "neutral-60": "#6b6e72",
        royalblue: "#007bff",
        cornsilk: "#fef8de",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    // fontSize: {
    //   // sm: "14px",
    //   // lg: "18px",
    //   "29xl": "48px",
    //   base: "16px",
    //   inherit: "inherit",

    //   "17xl": "36px",

    //   xl: "20px",
    //   "5xl": "3rem",
    //   inherit: "inherit",
    // },
  },
  corePlugins: {
    preflight: false,
  },
};
