/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(7deg)' },
        }
      },
      screens: {
        'xm': '280px',
        'cus': '340px'
      }
    },
  },
  plugins: [],
}
