const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')


const outputDirVersioned = 'dev';

module.exports = {
  entry: "./src/main.js",
  plugins: [
    new CleanWebpackPlugin([outputDirVersioned]),
    new ExtractTextPlugin("[name]/css/style.css"),
    new HtmlWebpackPlugin({
      title: 'Irene Iaccio',
      filename: 'index.html',
      template: 'src/index.html',
      'meta': {
        'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
        'theme-color': '#f4ec00'
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
          publicPath: "../../"
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  },

  output: {
    filename: '[name]/bundle.js',
    path: __dirname + "/dist",
  },

  resolve: {
    alias: {
      '~': path.join(__dirname, './src')
    }
  }
};
