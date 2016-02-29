var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  devServer: {
    contentBase: "public/",
    inline: true,
    historyApiFallback: true
  },
  entry: "./js/index.js",
  resolve: { alias: {} },
  module: {
    noParse: [],
    loaders: [
      {
        // test: /\.jsx?$/,
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'lodash']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css!sass'
        // loader: ExtractTextPlugin.extract('css!sass')
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
      {test: /\.png$/, loader: "url-loader", query: { mimetype: "image/png" }
      }
    ]
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
      jQuery: "jquery"
    }),
    new ExtractTextPlugin( "css/bundle.css", {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSER' : true
    })
  ]
};

module.exports = config;
