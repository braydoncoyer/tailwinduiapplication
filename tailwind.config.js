module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    borderWidth: {
          default: '1px',
          '0': '0',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '6': '6px',
          '8': '8px',
          '12': '12px',
          '24': '24px'
}
  },
  module : {
    rules: [
      {
        test   : /\.scss$/,
        loader : 'postcss-loader',
        options: {
          ident  : 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer'),
          ]
        }
      }
    ]
  }
};
