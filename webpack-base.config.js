var autoprefixer = require('autoprefixer');
var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist",
    filename: "zooids.js",
    library: "Zooids",
    libraryTarget: "umd"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          cacheDirectory: true,
        }
      },
      {
        test:   /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      // {
      //   test: /\.css$/,
      //   loader: "style-loader!css-loader?importLoaders=1!postcss-loader"
      // }
    ]
  },
  postcss: function () {
    return [ autoprefixer ];
  },

  externals: [
    // all non-relative requires
    /^[a-z\-0-9]+$/
  ]
};
