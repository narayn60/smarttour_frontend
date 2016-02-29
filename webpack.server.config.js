var fs = require('fs');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, "src"),
  entry: path.resolve(path.join(__dirname, 'server', 'index.js')),

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
        loader: ExtractTextPlugin.extract('css')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      },
    ]
  },
  output: {
    path: path.join(__dirname,  "server"),
    filename: 'server.bundle.js'
  },
  plugins: [
    new ExtractTextPlugin( path.join("../", "public", "css", "bundle.css"), {
      allChunks: true
    })
  ]
}