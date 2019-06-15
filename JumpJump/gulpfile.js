var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var sequence = require('run-sequence');

// 更方便性能更好的watch
var watchify = require('watchify');

// 压缩
var uglify = require("gulp-uglify");
// var pump = require("pump");
var source = require("vinyl-source-stream");
var buffer = require('vinyl-buffer');

// 引入babel处理es6代码
var babel = require('gulp-babel');

// gulp入口
gulp.task('default', function () {
  // console.log('this 9s');
  // npm install run-sequence
  sequence('babel', 'babelWatch', 'mainjs');
})

// for watchify
gulp.task('mainjs', function () {
    var b = browserify({
      entries: ['./dist/main.js'],
      cache: {},
      packageCache: {},
      plugin: [watchify]
    })
    // .external('angular').external('lodash');

    b.on('update', bundle);
    bundle();

    // uglify的文件源最好先用babel转义
    function bundle () {
      b.bundle()
        .pipe(source('output.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
    }
})

gulp.task('babel', function () {
  gulp.src('./base/*.js')
      .pipe(babel({
        presets: ["es2015"]
      }))
      .pipe(gulp.dest('./dist'))
})

gulp.task('babelWatch', function () {
  gulp.watch('./base/*.js', function () {
    sequence('babel');
  })
})


// 对于file可以这么干，对于stream则无效，pipe是异步的
// gulp.task('compress', function (cb) {
//   pump([
//         gulp.src('./output.js'),
//         uglify(),
//         gulp.dest('dist')
//        ],
//        cb
//   );
// })

// gulp.task('watch', function () {
//// gulp.watch 自动检测更新变化
//   gulp.watch(['./base/*.js'], function () {
//     sequence('mainjs');
//   });
// })

// gulp.task('vendorjs', function () {
//   var b = browserify().require('./bower_components/angular/angular.js', {expose: 'angular'
//   }).require('./bower_components/lodash/dist/lodash.js', {expose: 'lodash'
//   });

//   b.bundle().pipe(fs.createWriteStream('outvendor.js'));
// })

// npm install -D browserify-shim 可把shim加入browserify加入的依赖
