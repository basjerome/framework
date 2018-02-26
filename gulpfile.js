var G = require('gulp');
var modSass = require('gulp-sass');
var modSourcemaps = require('gulp-sourcemaps');
var modPlumber = require('gulp-plumber');
var modRename = require('gulp-rename');
var modPostcss = require('gulp-postcss');
var modConcat = require('gulp-concat');
var modUglify = require('gulp-uglify');

var $srcCSS = './src/sass/framework.scss';
var $srcJSfunctions = './src/js/functions/**/*';
var $srcJSvendors = './src/js/vendors/**/*';
var $dist = './dist/';
var $docs = './docs/';

G.task('css', function () {
  return G.src($srcCSS)
  .pipe(modSourcemaps.init())
  .pipe(modPlumber())
  .pipe(modSass({outputStyle: 'compressed',errLogToConsole: true}).on('error', modSass.logError))
  .pipe(modPostcss([require('autoprefixer')({browsers: ['last 15 versions','> 1% in FR']}),require('cssnano')]))
  .pipe(modRename({suffix: '.min'}))
  .pipe(modSourcemaps.write())
  .pipe(modPlumber.stop())
  .pipe(G.dest($dist + 'css/'))
  .pipe(G.dest($docs + 'css/'));
});

G.task('js', function () {
  return G.src($srcJSfunctions)
  .pipe(modPlumber())
  .pipe(modUglify())
  .pipe(modConcat('framework.min.js'))
  .pipe(modPlumber.stop())
  .pipe(G.dest($dist + 'js/'))
  .pipe(G.dest($docs + 'js/'));
});

G.task('default', ["css","js"], function() {
  G.watch('./src/sass/**/*.scss', ['css']);
  G.watch('./src/js/**/*', ['js']);
});