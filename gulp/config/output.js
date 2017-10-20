// output

const path = require('path');

module.exports = {
  path: path.resolve(__dirname, '../../dist'),
  filename: 'js/[name].js',
  chunkFilename: '[name].[chunkhash:8].js'
};