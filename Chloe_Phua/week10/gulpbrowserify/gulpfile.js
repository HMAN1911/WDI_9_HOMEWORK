var gulp = require('gulp');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
// var uglify = require('gulp-uglify')

gulp.task('browserify', function() {
  return browserify('app.js')
    .bundle()
    .pipe(source('bundle.js'))
    //babel here if you're using uglify and you're using es6
    .pipe(gulp.dest('./'));
});

gulp.task('server',function(){
  connect.server()
});

gulp.task('watch',function() {
  gulp.watch(['app.js'],['browserify'])
});

gulp.task('default',['server', 'watch']);
