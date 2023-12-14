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
        'Roboto', 'sans-serif'
      ],
      robotoM: [
        'Roboto Medium', 'sans-serif'
      ]
    },
    extend: {
      colors: {
        colorFooter: '#434343',
        colorInputFooter: '#4B4B4B',
        colorDonation: '#6B7280'
      },
      plugins: [
        require('@tailwindcss/forms')
      ]
    }
  }
}
