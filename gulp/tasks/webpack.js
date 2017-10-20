// webpack task

const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

// task

function dev() {
  gulp.task('webpack', function () {
    webpack(webpackConfig, function (err) {
      if (err) {
        throw err;
      }
    })
  });

  gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['webpack']);
  });

}

module.exports = dev;