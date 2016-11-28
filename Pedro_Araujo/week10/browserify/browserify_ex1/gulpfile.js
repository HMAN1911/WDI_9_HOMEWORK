
var gulp = require('gulp');
var connect = require('gulp-connect');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var browserify = require('browserify')
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

gulp.task('browserify', function () {
  return browserify('./app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(babel({presets: ['es2015']}))
    .pipe(uglify())
    .pipe(gulp.dest('./'));
});

gulp.task('server', function() {
  connect.server();
});

gulp.task('watch', function() {
  gulp.watch('./app.js', ['browserify']);
});

gulp.task('default', ['server', 'watch']);
