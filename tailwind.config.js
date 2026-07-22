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
          muted: "#7c8b5e",
        },
        neutral: {
          warm: "#f5f3ec",
          light: "#e8e6dd",
          medium: "#d4d1c8",
        },
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["ManropeVariable", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
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
