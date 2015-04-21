var concat = require('gulp-concat')
var gulp = require('gulp')
var react = require('gulp-react')
var uglify = require('gulp-uglify')
var watch = require('gulp-watch')

gulp.task('default', function() {
    watch('./app/*', function(){
        gulp.src('./app/*.jsx')
            .pipe(react())
            .pipe(concat('_compiled.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./js'))
    })
});