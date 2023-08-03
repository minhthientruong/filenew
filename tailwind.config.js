module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStopPositions: {
        90: "90%",
      },
      backgroundImage: {
        linearred:
          "linear-gradient(180deg, #E01E33 90%, rgba(224, 30, 51, 0.00) 100%)",
      },
      animation: {
        marquee: "marquee 90s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2.5rem))",
          },
        },
      },
    },
  },
};
