/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000',          // Pure black (luxury base)
        surface: '#121212',     // Elevated sections
        text: '#ffffff',

        // TechfiLabs Brand System
        brand: {
          DEFAULT: '#4887BC',   // Logo blue
          dark: '#2F5F8A',
          light: '#7FB0DD',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Satoshi', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
      },
      backgroundImage: {
        'hero-glow':
          'radial-gradient(circle at 50% 50%, rgba(72, 135, 188, 0.18) 0%, rgba(0, 0, 0, 0) 55%)',
      },
    },
  },
  plugins: [],
};
