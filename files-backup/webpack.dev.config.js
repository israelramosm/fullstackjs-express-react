const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    index: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      "./src/client/index.jsx",
    ],
  },
  output: {
    path: path.join(__dirname, "dist/public"),
    publicPath: "/",
    filename: "[name].js",
  },
  target: "web",
  mode: "development",
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5 for React App
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-proposal-export-default-from",
            ],
          },
        },
      },
      // {
      //   // Loads the javacript into html template provided.
      //   // Entry point is set below in HtmlWebPackPlugin in Plugins
      //   test: /\.html$/,
      //   use: [
      //     { loader: "html-loader" },
      //     // options: { minimize: true }
      //   ],
      // },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      excludeChunks: ["server"],
    }),
    new CopyWebpackPlugin({
      // Don't know why with out ../ copys public/public in dist/
      patterns: [
        { from: "./public/assets/**/*", to: "../" },
        { from: "./public/manifest.json", to: "./" },
        { from: "./public/favicon.ico", to: "./" },
      ],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
