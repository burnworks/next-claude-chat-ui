module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: [
        'default',
        {
          minifyFontValues: {
            removeQuotes: false,
          },
        },
      ],
    },
  },
};
