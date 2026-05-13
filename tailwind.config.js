/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#0F3D2E',
          deep: '#155E3F',
          green: '#1F8A5C',
          primary: '#1FA56C',
          accent: '#2BC48A',
          mint: '#9FE3C2',
          cream: '#F4F7F2',
          sand: '#E8EFE6',
          ink: '#0E1A14',
          slate: '#4B5A52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        wordmark: ['"Krona One"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}
