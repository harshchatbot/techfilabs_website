/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#052e16",
        surface: "#064e3b",
        text: "#ecfdf5",
        brand: {
          DEFAULT: "#bef264",
          dark: "#84cc16",
          light: "#d9f99d",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Nunito", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 50% 50%, rgba(190, 242, 100, 0.24) 0%, rgba(0, 0, 0, 0) 55%)",
      },
    },
  },
  plugins: [],
};
