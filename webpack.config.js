module.exports = {
  entry: './src/client/js/app.js',
  output: {
    filename: './src/server/assets/compiled/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!postcss-loader!sass-loader!"
      }
    ]
  },
  postcss: function () {
    return [require('autoprefixer')]
  }
}