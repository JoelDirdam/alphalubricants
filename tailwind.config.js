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
        'news': "url('/img/home/home_news.png')",
        'section1': "url('/assets/svg/home-section1.svg')",
        'about-first': "url('/img/about/about-first.png')",
        'about-second': "url('/img/about/about-second.png')",
      },
      textShadow: {
        'default': '0 2px 4px rgba(0, 0, 0, 1)',
        'md': '0 4px 6px rgba(0, 0, 0, 1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 1)',
        'xl': '0 20px 25px rgba(0, 0, 0, 1)',
        '2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        'none': 'none',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

