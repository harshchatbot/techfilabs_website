/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#000000', // Pure black for OLED/Luxury feel
        surface: '#121212', // Slightly lighter black
        text: '#ffffff',
        primary: '#3B82F6', // A sharp blue accent
      },
      fontFamily: {
        // Assuming you import a custom font
        sans: ['Inter', 'sans-serif'],
        display: ['Satoshi', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em', // Key for massive headlines
        tight: '-0.025em',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
      }
    },
  },
  plugins: [],
}