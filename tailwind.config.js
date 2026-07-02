/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9ed',
          100: '#f9edcb',
          200: '#f1d891',
          300: '#e9be57',
          400: '#dfa334',
          500: '#c98520',
          600: '#ad6618',
          700: '#8a4a18',
          800: '#733c1a',
          900: '#62331b',
        },
        cream: {
          50: '#fffcf7',
          100: '#faf4e8',
          200: '#f2e6d1',
        },
        charcoal: {
          700: '#444440',
          800: '#30302e',
          900: '#20201f',
          950: '#171716',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 45px -28px rgba(32, 32, 31, 0.28)',
        sidebar: '8px 0 35px -24px rgba(23, 23, 22, 0.45)',
      },
    },
  },
  plugins: [],
}
