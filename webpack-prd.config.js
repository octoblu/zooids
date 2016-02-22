var base    = require('./webpack-base.config.js');
var webpack = require('webpack');

module.exports = Object.assign({}, base, {
  output: Object.assign({}, base.output, {
    filename: "zooids.min.js"
  }),
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourceMap: false,
      screw_ie8: true,
      compress: {
        warnings: false
      }
    }),
  ]
});
