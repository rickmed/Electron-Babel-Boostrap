var webpack = require('webpack')

const appPath = './app'

module.exports = {
  entry: appPath + '/js/index.jsx',
  output: { path: __dirname + appPath, filename: '/bundle.js' },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'es2015', 'react', 'stage-2'],
          plugins: ['react-html-attrs']
        }
      }
    ]
  }
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin(),
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.DefinePlugin({
  //     'process.env': {
  //       'NODE_ENV': JSON.stringify('production')
  //     }
  //   })
  // ]
}
