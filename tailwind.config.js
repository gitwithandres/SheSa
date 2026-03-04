/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          lilac:   '#C4A0BC',
          pink:    '#E1B9DA',
          blush:   '#E4C6CE',
          lavender:'#E6C2E0',
          peach:   '#E2B4A6',
        },
      },
      fontFamily: {
        script:  ['"Great Vibes"', 'cursive'],
        heading: ['"Montserrat"', 'sans-serif'],
        body:    ['"Poppins"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-shesa':
          'linear-gradient(135deg, #E6C2E0 0%, #E1B9DA 30%, #E4C6CE 60%, #E2B4A6 100%)',
        'gradient-hero':
          'linear-gradient(160deg, #f9f0f8 0%, #f3e8f5 40%, #fce8ec 100%)',
        'gradient-cta':
          'linear-gradient(135deg, #C4A0BC 0%, #E1B9DA 50%, #E6C2E0 100%)',
      },
      boxShadow: {
        'soft':    '0 4px 24px 0 rgba(196,160,188,0.18)',
        'hover':   '0 8px 40px 0 rgba(196,160,188,0.32)',
        'card':    '0 2px 16px 0 rgba(196,160,188,0.14)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
        'float':   'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
