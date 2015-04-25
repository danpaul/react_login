var browserSync = require('browser-sync').create();

var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

var reload      = browserSync.reload;

gulp.task('main-build', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./app/main.jsx');
  return b.bundle()
    .pipe(source('compiled.js'))
    .pipe(reload({stream: true}))
    .pipe(gulp.dest('./js'));
});

gulp.task('reload-after', ['main-build'], reload);

gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.start(['main-build']);
    gulp.watch('./app/*', ['reload-after']);
});