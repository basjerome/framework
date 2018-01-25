var G = require('gulp');
var modSass = require('gulp-sass');
var modSourcemaps = require('gulp-sourcemaps');
var modPlumber = require('gulp-plumber');
var modRename = require('gulp-rename');
var modPostcss = require('gulp-postcss');

var $src = './src/sass/framework.scss';
var $dist = './dist/';
var $docs = './docs/';

G.task('css', function () {
  return G.src($src)
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

G.task('default', ["css"], function() {
  G.watch('./src/sass/**/*.scss', ['css']);
});