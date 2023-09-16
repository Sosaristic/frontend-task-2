/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rose: "#BE123C",
        blackText: "#111827",
        greyText: "#9CA3AF",
      },
    },
    fontFamily: {
      DMsans: ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      bannerBg: "url('/images/Poster.webp')",
    },
  },
  plugins: [],
};
