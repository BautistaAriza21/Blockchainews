/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
         'xs':'280px',
         'sm':'360px',
         'md':'768px',
         'lg':'1024px',
         'xl':'1280px',
      },

      colors: {
        'azul':'#0D47A1',
        'gris':'#F5F5F5',
        'naranja':'#FF5722',
        'verde':'#0CDA9C',
        'rojo':'#B73C3C',
      },

      fontFamily: {
        'lato':['Lato, sans-serif'],
        'Poppins':['Poppins, sans-serif'],
      },

      fontSize: {
        '32':'32px',
        '16':'16px',
      }

    },
  },
  plugins: [],
}

