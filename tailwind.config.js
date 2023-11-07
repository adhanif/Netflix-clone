/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        netCol: "#E50914",
      },
      fontFamily: {
        custom: [
          "Netflix Font",
          "sans-serif",
          "Helvetica Neue",
          "Segoe UI",
          "Roboto",
          "Ubuntu",
        ],
      },
    },
  },
  plugins: [],
};
