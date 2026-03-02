/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d5016',
          light: '#3d6b1e',
          dark: '#1e3a0e',
        },
        accent: {
          DEFAULT: '#a67c52',
          light: '#c9a87c',
        },
        sand: {
          DEFAULT: '#faf8f5',
          dark: '#f0ebe4',
        },
        earth: {
          DEFAULT: '#2c2c2c',
          light: '#5a5a5a',
          muted: '#888888',
          border: '#e0d8ce',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};
