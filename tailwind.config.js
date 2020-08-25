module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    mode: 'all',
    content: [
      './pages/**/*.jsx',
      './pages/**/*.js',
      './components/**/*.jsx'
    ]
  }
}
