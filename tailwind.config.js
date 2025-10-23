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
        mantexia: {
          primary: '#ED0B63',
          secondary: '#6B0237',
          light: '#FFE8F1',
          50: '#fef7f0',
          100: '#feeee1',
          200: '#fdd4c3',
          300: '#fbb19f',
          400: '#f8857a',
          500: '#f4625c',
          600: '#e1434e',
          700: '#c73344',
          800: '#a42d3f',
          900: '#872a3c',
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
        'mantexia-gradient': 'linear-gradient(135deg, #ED0B63 0%, #FFFFFF 100%)',
        'mantexia-radial': 'radial-gradient(circle, #ED0B63 0%, #FFFFFF 70%)',
        'mantexia-overlay': 'linear-gradient(135deg, rgba(237, 11, 99, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #ED0B63 0%, #6B0237 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
