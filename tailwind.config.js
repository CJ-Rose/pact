/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#393640",
          gray: "#fafcfc",
          orange: "#c9b191",
          // orange: "#e3ac64",
          orange2: "#b37f3b",
          green: "#A2C11C",
          green2: "#fcf18d",
          teal: "#2C5D63",
          dark: "#053a42",
          darker: "#08292e",
          darkest: "#01090a",
        },
      },
      fontFamily: {
        sans: ["JetBrains Mono"],
      },
    },
  },
  plugins: [],
};
