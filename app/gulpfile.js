var _ = require('lodash');

// Include gulp
var gulp = require('gulp');
// var webpack = require('webpack');
var debug = require('gulp-debug');

var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');
var gp_uglify = require('gulp-uglify');
var gp_sourcemaps = require('gulp-sourcemaps');
var gp_minifyCss = require('gulp-minify-css');
var gp_googleWebFonts = require('gulp-google-webfonts');

// gulp.task('webpack', function (done) {
//   webpack(require('./webpack.config.js')).run(function(err, stats) {
//     if(err) {
//       console.log('Error', err);
//     } else {
//       console.log(stats.toString());
//     }
//     done();
//   });
// });

var css_locations = {};
css_locations.bootstrap = "./node_modules/bootstrap/dist/css/bootstrap.min.css";
css_locations.fontaweseome = "./node_modules/font-awesome/css/font-awesome.min.css";
css_locations.griddle = "./node_modules/griddle-react/";
css_locations.bootstrap_table = "./node_modules/react-bootstrap-table/css/react-bootstrap-table-all.min.css";
var css_list = _.values(css_locations);

gulp.task('copy', function() {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('public/'));
  gulp.src('./src/img/**')
    .pipe(gulp.dest('public/img/'));
});

// gulp.task('js-fef', function() {
//   return gulp.src('./src/js/design_js/**')
//     .pipe(gp_sourcemaps.init())
//     .pipe(gp_concat('concat.js'))
//     .pipe(gulp.dest('public/js/'))
//     .pipe(gp_rename('pagebundle.min.js'))
//     .pipe(gp_uglify())
//     .pipe(gp_sourcemaps.write('./'))
//     .pipe(gulp.dest('public/js/'));
// });

gulp.task('bundle-css', function() {
  return gulp.src(css_list)
    .pipe(gp_minifyCss())
    .pipe(gp_concat('vendor.min.css'))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('fonts', function() {
  gulp.src('./fonts.list')
    .pipe(gp_googleWebFonts())
    .pipe(gulp.dest('public/fonts'));
  gulp.src('./node_modules/font-awesome/fonts/**.*')
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('default', ['copy', 'fonts', 'bundle-css']);
