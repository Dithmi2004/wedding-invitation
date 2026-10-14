/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFDF8',
        champagne: '#C6A15B',
        blush: '#F4E7E3',
        olive: '#354638',
        charcoal: '#302B28',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        script: ['Allura', 'cursive'],
      },
      boxShadow: {
        soft: '0 20px 70px rgba(48, 43, 40, 0.12)',
        gold: '0 18px 45px rgba(198, 161, 91, 0.18)',
      },
    },
  },
  plugins: [],
}
