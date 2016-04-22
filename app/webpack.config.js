var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var aliases = require('./webpack_conf/resolve_alias');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var config = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  devServer: {
    contentBase: "public/",
    inline: true,
    historyApiFallback: true
  },
  entry: ["babel-polyfill", "./js/index.js"],
  resolve: {
    root: path.resolve(__dirname),
    alias: aliases,
    extensions: ['', '.js', '.jsx']
  },
  module: {
    noParse: [],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'lodash']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!postcss-loader!sass'
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
      {test: /\.png$/, loader: "url-loader", query: { mimetype: "image/png" }
      }
    ]
  },
  postcss: function() {
    return [autoprefixer, precss];
  },
  output: {
    path: 'public',
    filename: "bundle.min.js"
  },
  // plugins: debug ? [] : [
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      warnings: false,
      mangle: false,
      sourcemap: false
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      react: "react",
      React: "react"
    }),
    // new ExtractTextPlugin( "css/bundle.css", {
    //   allChunks: true
    // }),
    new webpack.DefinePlugin({
      'process.env.BROWSER' : true
    })
  ]
};

module.exports = config;
