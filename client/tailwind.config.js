import formsPlugin from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: "#0c45ad",
      secondary: "#ff702e",
      white: "#e9e6e9",
      error: "#c52e2e",
      black: "#060b10",
      accent: "#1e3242",
    },
    fontFamily: {
      sans: ["Chakra Petch", "sans-serif"],
    },
  },
  plugins: [formsPlugin],
};
