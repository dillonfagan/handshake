module.exports = {
  purge: ['src/app.html', 'src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#E5E7EB',
        primary: '#047857'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
