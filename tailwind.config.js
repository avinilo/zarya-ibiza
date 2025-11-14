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
          primary: '#2563eb',
          secondary: '#1d4ed8',
          light: '#dbeafe',
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
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
        'firstclass-gradient': 'linear-gradient(135deg, #2563eb 0%, #FFFFFF 100%)',
        'firstclass-radial': 'radial-gradient(circle, #2563eb 0%, #FFFFFF 70%)',
        'firstclass-overlay': 'linear-gradient(135deg, rgba(37, 99, 235, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%)',
        'gradient-primary': 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
