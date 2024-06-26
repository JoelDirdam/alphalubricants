/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gap: {
        '16': '10rem',
      },
      colors: {
        red: {
          500: '#F04438',
        },
        yellow: {
          500: '#FFD000',
        },
      },
      borderRadius: {
        'xlg': '0.9rem',
      },
    },
  },
  plugins: [],
}

