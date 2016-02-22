var base = require('./webpack-base.config.js');

module.exports = Object.assign({}, base, {
  debug: true,
  devtool: "source-map",
  output: Object.assign({}, base.output, {
    pathinfo: true
  })
});
