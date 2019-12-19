const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  entry: {
    app: [
      'webpack-dev-server/client?path=http://localhost:8989/__webpack_hmr',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, 'src/indexStart.js'),
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 8989,
    hot: true,
  }
});