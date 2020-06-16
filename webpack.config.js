const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: { 
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    publicPath: '/'
  }, 
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html", 
      filename: "./index.html"
    }),
    new CleanWebpackPlugin(),   
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./src/assets/img/*",
          to: "./src/assets/img",
          flatten: true,
        },
      ],
    }),
  
  
  ],
  stats: "minimal",
  devtool: "source-map",
  mode: "development",
  devServer: {
    open: false,
    contentBase: "./dist",
    inline: true,
    port: 4000,
   
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|jpg|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }
    ]
  }
};