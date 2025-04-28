/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#FAF9F6',
        accent: {
          light: '#C4D7ED',
          DEFAULT: '#A7C7E7',
          dark: '#8AB4DE',
        },
        text: '#2C2C2C',
        secondary: {
          light: '#E2D3BC',
          DEFAULT: '#D8C3A5',
          dark: '#C9B08E',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};