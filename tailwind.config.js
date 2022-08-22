/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        regal: '#1E1F26',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
        16: '16px',
      },
      boxShadow: {
        '3xl': '-1px 10px 32px -12px rgba(0,0,0,0.8)',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
