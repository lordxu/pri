# JumpJump
Small canvas game, packed by gulp, for the purpose of learning.

## Branches

### auto-fresh

base文件夹中放置了需要转换和打包的源js文件(模块导入导出使用commonJS语法)，使用broserify打包
添加gulpfile.js文件，加入内容
打包后得到output.js文件

    Dependencies: gulp, browserify, run-sequence

```javascript
var fs = require('fs');
var gulp = require('gulp');
var browserify = require('browserify');
var sequence = require('run-sequence');

gulp.task('default', function () {
  // console.log('this 9s');
  // npm install run-sequence
  sequence('mainjs', 'watch');
})


gulp.task('mainjs', function () {
   browserify().add('./base/main.js').bundle().pipe(fs.createWriteStream('output.js'));
})

gulp.task('watch', function () {
  gulp.watch(['./base/*.js'], function () {
    sequence('mainjs');
  });
})
```

### vendor

性能更好的watch，vendor打包

    Dependencies: browserify-shim, watchify

```javascript
var watchify = require('watchify');
...
gulp.task('mainjs', function () {
  var b = browserify({
    entries: ['./base/main.js'],
    cache: {},
    packageCache: {},
    plugin: [watchify]
  }).external('angular').external('lodash')

  b.on('update', bundle);
  bundle();

  function bundle () {
    b.bundle().pipe(
      fs.createWriteStream('output.js');
    )
  }
})

gulp.task('vendorjs', function () {
  var b = browserify().require('./bower_components/angular/angular.js', {expose: 'angular'
  }).require('./bower_components/lodash/dist/lodash.js', {expose: 'lodash'
  });

  b.bundle().pipe(fs.createWriteStream('outvendor.js'));
})
```

也可以配置broserify的package.json设置，如下：

```json
  "browser": {
    "angular": "./bower_components/angular/angular.js",
    "lodash": "./bower_components/lodash/dist/lodash.js"
  },
  "browserify-shim": {
    "angular": "angular",
    "lodash": "_"
  },
  "browserify": {
    "transform": [ "browserify-shim" ]
}
```

### babel-uglify

uglify的文件源最好先用babel进行转义

    Dependencies: babel-core, babel-preset-env, babel-preset-es2015, gulp-babel; vinyl-source-stream, vinyl-buffer; gulp-uglify

uglify需要导入

```javascript
// 压缩
var uglify = require("gulp-uglify");
// var pump = require("pump");
var source = require("vinyl-source-stream");
var buffer = require('vinyl-buffer');
```

babel需要导入
`var babel = require('gulp-babel');`

首先用babel进行转义

```javascript
> gulpfile.js
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

> .babelrc
{
  "presets": ["es2015"]
}
```

修改mainjs

```javascript
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
```
