/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#0a0a0a',
          darker: '#050505',
          card: '#111111',
          cardHover: '#161616',
          neon: '#39ff14',
          neonGlow: 'rgba(57, 255, 20, 0.5)',
          muted: '#808080',
          text: '#eeeeee',
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', '"Roboto Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(57, 255, 20, 0.2)',
        'neon-hover': '0 0 20px rgba(57, 255, 20, 0.4)',
      },
    },
  },
  plugins: [],
}
