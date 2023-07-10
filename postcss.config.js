module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss'), require('autoprefixer')],
  daisyui: {
    themes: ['light', 'bumblebee', 'business'],
    darkTheme: 'business',
  },
};
