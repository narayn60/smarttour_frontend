var fs = require('fs');
var path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),
  entry: path.resolve(path.join(__dirname, 'server', 'index.js')),

  output: {
    filename: path.join(__dirname, 'server', 'server.bundle.js')
  },

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
          presets: ['es2015', 'react']
        }
      }
    ]
  }

}
