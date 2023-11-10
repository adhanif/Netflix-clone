/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        netCol: "#E50914",
        netColHover: "#c11119",
        background: "rgba(0, 0, 0, 0.5)",
        strip: "#232323"
      },
      backgroundImage: {
        "hero-image": "url('../src/assets/hero.jpg')",
      },
      fontFamily: {
        custom: [
          "Netflix Sans",
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
