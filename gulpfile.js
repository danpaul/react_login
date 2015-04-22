var browserSync = require('browser-sync').create();
var browserify = require('gulp-browserify');

// var concat = require('gulp-concat')
var gulp = require('gulp')
var react = require('gulp-react')
var uglify = require('gulp-uglify')
var watch = require('gulp-watch')

gulp.task('process-js', function() {
    gulp.src('./app/*.jsx')
        .pipe(react())
        .pipe(browserify({
            insertGlobals : true,
            debug : true
        }))
        .pipe(concat('_compiled.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'))
});

gulp.task('reload-after', ['process-js'], browserSync.reload)

gulp.task('default', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./app/*', ['reload-after'])
    
});