const webpack = require('webpack')
const merge = require('webpack-merge')
const _ = require('lodash')

const baseConfig = require('./webpack.base.config')

module.exports = merge({}, baseConfig, {
  devServer: {
    stats: 'minimal',
    host: '0.0.0.0',
    port: 8080,
    progress: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.LANG': JSON.stringify(process.env.LANG)
    })
  ]
})
