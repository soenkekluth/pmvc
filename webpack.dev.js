const webpack = require('webpack');
const package = require('./package');

module.exports = {
  'context': __dirname + '/src',
  'entry': [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:3000/',
    './pmvc.js'
  ],
  'output': {
    'path': __dirname + '/bin',
    'filename': `${package.name}.js`,
    'library': `pmvc`,
    'libraryTarget': 'umd'
  },
  'module': {
    'loaders': [{
      'test': /\.js$/,
      'exclude': /node_modules/,
      'loader': 'babel'
    }]
  },
  'plugins': [
    // new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    // contentBase: './',
    port: 3000,
    hot: true,
    open: true,
    inline: true
  }
};
