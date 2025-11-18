/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        firstclass: {
          primary: '#d4af37',
          secondary: '#b8860b',
          light: '#fdf6e3',
          50: '#fdfcf8',
          100: '#fdf6e3',
          200: '#f9e9c2',
          300: '#f4d896',
          400: '#edc267',
          500: '#d4af37',
          600: '#b8860b',
          700: '#9a6d0b',
          800: '#7c560d',
          900: '#65450e',
        },
        primary: {
          50: '#fef7f0',
          100: '#feeee1',
          200: '#fdd4c3',
          300: '#fbb19f',
          400: '#f8857a',
          500: '#ED0B63',
          600: '#d10a58',
          700: '#b5094d',
          800: '#990842',
          900: '#6B0237',
        },
      },
      backgroundImage: {
        'firstclass-gradient': 'linear-gradient(135deg, #d4af37 0%, #FFFFFF 100%)',
        'firstclass-radial': 'radial-gradient(circle, #d4af37 0%, #FFFFFF 70%)',
        'firstclass-overlay': 'linear-gradient(135deg, rgba(212, 175, 55, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #d4af37 0%, #b8860b 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
