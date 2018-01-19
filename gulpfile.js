var gulp = require('gulp');
// var modServer = require('browser-sync');
var modSass = require('gulp-sass');
var modSourcemaps = require('gulp-sourcemaps');
var modPlumber = require('gulp-plumber');
var modUglify = require('gulp-uglify');
var modStripDebug = require('gulp-strip-debug');
// var modConcat = require('gulp-concat');
// var modJshint = require('gulp-jshint');
// var modJshintStylish = require('jshint-stylish');
var modRename = require('gulp-rename');
// var modImagemin = require('gulp-imagemin');
// var modHtmlmin = require('gulp-htmlmin');
// var modInject = require('gulp-inject');
// var modClean = require('gulp-clean');
// var modChanged = require('gulp-changed');
// var modScp = require('scp2');
// var modMerge = require('merge-stream');
var modPostcss = require('gulp-postcss');
var modStylelint = require('gulp-stylelint');
// var modInlineImagePath = require('gulp-inline-image-path');
// var modSsh = require('ssh2').Client;
// var modServerReload = modServer.reload;
// var conn = new modSsh();

var $src = './src/sass/framework.scss';
var $dist = './dist/';
var $docs = './docs/';

gulp.task('css', function () {
  return gulp.src($src)
    .pipe(modSourcemaps.init())
    .pipe(modPlumber())
    .pipe(modStylelint({
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }))
    .pipe(modPostcss([
      require('autoprefixer')({
        browsers: [
          'last 2 versions',
          '> 1% in FR'
        ],
        cascade: false
      }),
      require('cssnano')
    ]))
    .pipe(modSass({
      outputStyle: 'compressed',
      errLogToConsole: true
    }).on('error', modSass.logError))
    .pipe(modRename({
      suffix: '.min'
    }))
    .pipe(modSourcemaps.write())
    .pipe(modPlumber.stop())
    .pipe(gulp.dest($dist + 'css/'))
    .pipe(gulp.dest($docs + 'css/'));
});

gulp.task('default', ["css"], function() {
  gulp.watch('./src/sass/**/*.scss', ['css']);
});