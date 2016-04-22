var fs = require('fs');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var aliases = require('./webpack_conf/resolve_alias');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: ["babel-polyfill", path.resolve(path.join(__dirname, 'server', 'index.js'))],

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod;
    return ext;
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  resolve: {
    root: path.resolve(__dirname),
    alias: aliases,
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy', 'lodash']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss-loader')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss-loader!sass')
      },

      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" },
      {test: /\.png$/, loader: "url-loader", query: { mimetype: "image/png" }}
    ]
  },
  postcss: function() {
    return [autoprefixer, precss];
  },
  output: {
    path: path.join(__dirname,  "server"),
    filename: 'server.bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      react: "react",
      React: "react"
    }),
    new ExtractTextPlugin( path.join("../", "public", "css", "bundle.css"), {
      allChunks: true
    })
  ]
}
