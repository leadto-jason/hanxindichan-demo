const webpack = require('webpack')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const _ = require('lodash')
const baseConfig = require('./webpack.base.config')

module.exports = merge({}, baseConfig, {
  plugins: [
    new CleanWebpackPlugin([ 'dist' ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.LANG': JSON.stringify(process.env.LANG)
    })
  ]
})
