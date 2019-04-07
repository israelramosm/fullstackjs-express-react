const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    index: './app/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist/public/'),
    publicPath: './',
    filename: '[name].js'
  },
  target: 'web',
  devtool: '#source-map',
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {loader: "html-loader"},
          //options: { minimize: true }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    }),
    new CopyWebpackPlugin([
      // Don't know why with out ../ copys public/public in dist/
      { from: "./public/styles/**/*", to: "../" },
      { from: "./public/manifest.json", to: "./" },
      { from: "./public/favicon.ico", to: "./" }
    ]),
  ]
}