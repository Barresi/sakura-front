/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    screens: {
      usm: '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px'
    },
    container: {
      center: true,
      padding: '2rem'
    },
    colors: {
      white: '#fff',
      darkWhite: '#f2f2f2',
      ghostlyWhite: '#f8fafc',
      smokyWhite: ' #f1f5f9',
      cadet: '#55677c',
      cadetBlue: '#adb5bd',
      lightGray: '#d6d6d6',
      nickel: '#6c767a',
      darkLightGray: '#929292',
      twitter: '#20b4ee',
      water: '#cbeefc',
      red: '#d22828',
      redHover: '#c32222',
      darkGray: '#adb5bd',
      signalBlack: '#292929',
      brownBlack: '#202028',
      black: '#000',
      grayBlue: '#23232f',

      body: '#eeeff1',
      bodyDark: '#191924',
      border: 'hsl(214.3, 31.8%, 91.4%)',
      borderDark: 'hsl(217, 0.2, 32)'
    },
    borderRadius: {
      lg: '0.5rem',
      md: 'calc(0.5rem - 2px)',
      sm: 'calc(0.5rem - 4px)'
    }
  },
  plugins: [require('tailwindcss-animate')]
}
