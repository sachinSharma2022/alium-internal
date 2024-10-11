/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      xmd:'960px',
      lg: '1170px',
      xl: '1440px',
      xxl:'1700px',
    },
    fontFamily: {
      primary: ['Albert Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-blue':'#3B37FF',
        'seconday-blue':'#0B00CC',
        'primary-red':'#efefff',
        'gray-light':'#727272',
        'gray-dark':'#4F4F4F',
        'gray-table-bg' : '#FAFAFA',
        'black-primary':'#111111',
        'american-silver':'#CFCFCF',
        'white-smoke': '#f5f5f5',
        akabeni:'#C62828',
        'flash-of-orange':'#FFAB00',
        'buddha-green':'#36B37E',
        'shark-fin': '#969696',
        tooltipbg:'#2F2F2F',
        'tricorn-black':'#2F2F2F',

      },
      borderColor:{
      borderPrimary:'#CFCFCF',
      borderSecondary:'#3B37FF',
      },
    },
  },
  plugins: [],
};
