var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'react',
  'lodash',
  'redux',
  'react-dom',
  'react-redux',
  'react-router'
];
// 'faker', 'react-input-range', 'redux-form', 'redux-thunk'

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    bundle: './src/index.jsx',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '/[name].[hash].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        loader: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    })
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true,
    hot: true
  },
};
