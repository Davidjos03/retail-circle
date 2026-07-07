/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Figma "Retails Circle Os" dark theme
        base: '#141414',
        surface: '#1a1a1a',
        'surface-2': '#212121',
        line: '#303030',
        'line-soft': '#242424',
        brand: {
          DEFAULT: '#7629f9',
          icon: '#784bdb',
          soft: 'rgba(118, 41, 249, 0.2)',
        },
        paragraph: '#797979',
        nav: '#b7b7b7',
      },
    },
  },
  plugins: [],
}
