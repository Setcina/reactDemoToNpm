const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    app: [
      path.resolve(__dirname, 'src/indexBuild.js'),
    ]
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "index.js",
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJSPlugin(),
  ]
});