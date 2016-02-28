// Include gulp
var gulp = require('gulp');
var webpack = require('webpack');
var debug = require('gulp-debug');

gulp.task('webpack', function (done) {
  webpack(require('./webpack.config.js')).run(function(err, stats) {
    if(err) {
      console.log('Error', err);
    } else { 
      console.log(stats.toString());
    }
    done();
  });
});

gulp.task('copy', function() {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('public/'));
  gulp.src('./src/js/design_js/*')
    .pipe(gulp.dest('public/js/'));
  gulp.src('./src/img/*')
    .pipe(gulp.dest('public/img/'));
  gulp.src(['./src/css/agency.css'])
    .pipe(gulp.dest('public/css/'));
});

gulp.task('default', ['copy', 'webpack']);
