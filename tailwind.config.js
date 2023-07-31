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
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        mobile: "url('images/bg-main-mobile.png')",
        desktop: "url('images/bg-main-desktop.png')",
      },
    },
  },
  plugins: [],
};
