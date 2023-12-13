/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      display: [
        'Helvetica Neue', 'sans-serif'
      ],
      roboto: [
        'Roboto', 'sans-serif',
        'Roboto', 'sans-serif'
      ],
      robotoM: [
        'Roboto Medium', 'sans-serif'
      ]
    },
    extend: {
      colors: {
        colorFooter: '#434343',
        shoppingTitle: 'rgba(22, 101, 52, 0.10)'
      }
    },
    plugins: [
      require('@tailwindcss/forms')
    ]
  }
}
