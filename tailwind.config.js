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
        blue: {
          900: '#001952',
        },
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
      backgroundImage: {
        'our-products': "url('/img/home/home_nuestros_productos.png')",
      },
    },
  },
  plugins: [],
}

