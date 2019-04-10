const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry: {
    index: './client/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist/public'),
    publicPath: '/',
    filename: '[name].js'
  },
  target: 'web',
  devtool: '#source-map',
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
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
          {
            loader: "html-loader",
            options: { minimize: true }
          },
          
        ]
      },
      {
        test: /\.scss$/,
        use: [
            // Loads CSS into a file when you import it via Javascript
            // Rules are set in MiniCssExtractPlugin
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
      },
      {
        // Loads images into CSS and Javascript files
        test: /\.(png|svg|jpg|gif)$/,
        use: [{loader: "url-loader"}]
      },
      // {
      //  test: /\.(png|svg|jpg|gif)$/,
      //  use: ['file-loader']
      // }
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}