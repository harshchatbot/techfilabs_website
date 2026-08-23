import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#052e16",
        surface: "#064e3b",
        text: "#ecfdf5",
        techfi: {
          dark: "#064E3B",
          brand: "#059669",
          bright: "#10B981",
          mintBg: "#ECFDF5",
          mintCard: "#F7FEFA",
          darkSurface: "#061B16",
          textMain: "#0F172A",
          textMuted: "#475569",
        },
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
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
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

export default config;
