var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: ['whatwg-fetch'],
  entry: "./js/site.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
        test: /\.scss$/i,
        loader: 'style!css!sass'
      },
      {
        test: /\.css$/i,
        loader: "style!css"
      },
      {
        test: /\.svg$/,
        loader: 'babel!svg-react'
      }
    ]
  },
  output: {
    path: "./wwwroot",
    filename: "js/site.min.js"
  },
  plugins: [
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
