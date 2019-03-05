var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['./docs/index.js'],
  output: {
    path: path.join(__dirname, 'docs/build'),
    filename: 'bundle.js',
    publicPath: 'docs/build/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /react-context/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/, /modules/],
        loaders: ['babel-loader'],
      }, {
        test: /\.jsx$/,
        exclude: [/node_modules/, /modules/],
        loaders: ['jsx-loader', 'babel-loader'],
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.md$/,
        loaders: ['html-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      'react-color': path.resolve(__dirname, './src/index.js'),
    },
    extensions: ['', '.js', '.jsx'],
    fallback: [path.resolve(__dirname, './docs/modules')],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({ quiet: true }),
    new webpack.NoErrorsPlugin(),
  ],
  quiet: true,
}
