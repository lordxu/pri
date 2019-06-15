var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var sequence = require('run-sequence');
var watchify = require('watchify');
// 压缩
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
// es6转义
var babel = require('gulp-babel');

gulp.task('default', function () {
  sequence('babel', 'babelWatch', 'mainjs');
})

gulp.task('mainjs', function () {
  var b = browserify({
    entries: ['./tmp/main.js'],
    cache: {},
    packageCache: {},
    plugin: [watchify]
  });
  b.on('update', bundle);
  bundle();
  function bundle () {
    b.bundle()
     .pipe(source('output.js'))
     .pipe(buffer())
     .pipe(uglify())
     .pipe(gulp.dest('./dist'));
  }
})

gulp.task('babel', function () {
  gulp.src('./src/**/*.js')
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest('./tmp'))
})

gulp.task('babelWatch', function () {
  gulp.watch('./src/**/*.js', function () {
    sequence('babel');
  })
})
// gulp.task('watch', function () {
//   gulp.watch(['./src/*.js', './src/ele/*.js', './src/runtime/*.js'], function () {
//     sequence('mainjs');
//   })
// })