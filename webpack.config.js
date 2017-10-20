// webpack.config.js
// const _ = require('lodash');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // css合并
const extractCSS = new ExtractTextPlugin('css/[name].css');

function resolve(src) {
  return path.resolve(__dirname, src);
}

// module
const getModules = function () {
  return {
    rules: [
      {
        test: /\.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader','postcss-loader']
        })
      },
      {
        test: /\.styl(us)?$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader','postcss-loader','stylus-loader']
        })
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        },{
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  }
};

// 别名配置
const getAlias = function () {
  return {
    'src': resolve('src')
  }
};

module.exports = {
  entry: require('./gulp/config/entry'),
  output: require('./gulp/config/output'),
  module: getModules(),
  resolve: {
    alias: getAlias()
  },
  plugins: [
    // 提取css
    extractCSS,
    // 提取公共模块, 索引匹配的打包成一个，其它一个
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor']
    })
  ]
};
