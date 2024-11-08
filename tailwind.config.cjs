/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nofill: 'transparent',
        current: 'currentColor',
        ctcolor: '#81b29a',
        ctlinkcolor: '#2cccff',
        ctwhite: '#f4f1de',
        ctgold: '#9c7028',
        ctgoldlight: '#f2cc8f',
        ctbackground: '#101b33',
        ctloadmorebg: '#33614b',
      },
    },
  },
};
