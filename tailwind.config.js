module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          'blue': '#1fb6ff',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'green': '#13ce66',
          'gray-dark': '#273444',
          'gray': '#8492a6',
          'gray-light': '#d3dce6',
          'tan':'#B68D40',
          'cream':'#F4EBD0',
          'charcoal':'#122620',
          'gold':'#D6AD60'
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }