/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "clr-bg-main": "#fff",
        "clr-primary-700": "#21092f",
        "clr-primary-500": "#8e8593",
        "clr-primary-300": "#dedddf",
        "clr-error": "#ff5252",
      },
      backgroundImage: {
        "card-front": "url('images/bg-card-front.png')",
        "card-back": "url('images/bg-card-back.png')",
      },
    },
  },
  plugins: [],
};
