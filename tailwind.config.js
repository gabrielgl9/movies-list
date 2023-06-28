/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      purple: {
        100: '#E0C6F6',
        400: '#59299A',
        500: '#230257',
      },
      white: '#fff',
    },
    extend: {},
  },
  plugins: [],
}
