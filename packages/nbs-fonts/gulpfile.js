/* eslint-disable no-param-reassign */
const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const stylelint = require('stylelint');

/**
 * Compile less files
 */
gulp.task('less', function lessCompile() {
  const plugins = [
    stylelint({ fix: true }),
    autoprefixer({ browsers: ['last 2 version'] })
  ];
  return gulp
    .src(['./src/**/*.less', '!./src/utilities/*'])
    .pipe(
      less({
        paths: [path.join(__dirname, 'src')],
        javascriptEnabled: true
      })
    )
    .pipe(postcss(plugins))
    .pipe(gulp.dest('./lib'))
    .pipe(
      rename({
        suffix: '.min'
      })
    )
    .pipe(postcss([cssnano()]))
    .pipe(gulp.dest('./lib'));
});

/**
 * Copy src files to lib
 */
gulp.task('copy', function copyFiles() {
  return gulp
    .src(['./src/nbs-*/*', './src/utilities*/*', './src/*.less'])
    .pipe(gulp.dest('./lib'));
});

gulp.task('default', gulp.series('copy', 'less'));
