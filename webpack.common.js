const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const env = process.env.NODE_ENV;

// 开发环境的plugins
const pluginsDev = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'Output Management',
    template: 'index.html'
  }),
  // 热模块更新
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
]

// 生产环境的plugins
const pluginsProd = [
  new CleanWebpackPlugin(),
  // 代码优化
  new UglifyJSPlugin(),
]

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "index.js",
    // libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader' 
      },
      {
        test: /\.css$/, 
        use: [
          'style-loader',
          'css-loader',
        ]
      },
    ]
  },
  plugins: env === 'production' ? pluginsProd : pluginsDev,
}