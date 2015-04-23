var browserSync = require('browser-sync').create();
// var browserify = require('gulp-browserify');

// // // var concat = require('gulp-concat');
// // var gulp = require('gulp');
// // var react = require('gulp-react');
// // var uglify = require('gulp-uglify');
// // var watch = require('gulp-watch');
// // var reactify = require('reactify');
// // var source = require('vinyl-source-stream')

// // var b = browserify()
// // b.transform(reactify)



// var browserify = require('browserify');
// var gulp = require('gulp');
// var source = require("vinyl-source-stream");
// var reactify = require('reactify');

// var buildDir = './js'


// gulp.task('default', function() {


//     var b = browserify();
//     b.transform(reactify); // use the reactify transform
//     b.add('./app/main.jsx');
//     return b.bundle()
//         // .pipe(source('./app/main.jsx'))
//         .pipe(source('_compiled.js'))
//         .pipe(gulp.dest(buildDir + '/'));
//         // .pipe(gulp.dest('./js/_compiled.js'));


// });


// gulp.task('process-js', function(){

//     // gulp.task('browserify', function(){
//       var b = browserify();
//       b.transform(reactify); // use the reactify transform
//       b.add('./app/main.jsx');
//       return b.bundle()
//         .pipe(source('./app/main.jsx'))
//         .pipe(gulp.dest('./js/_compiled.js'));
//     // });

// });







// gulp.task('process-js', function() {

//     var b = browserify();
//     b.transform(reactify); // use the reactify transform

//     return b.bundle
//         .pipe(source('./app/main.jsx'))
//         // .pipe(concat('_compiled.js'))
//         // .pipe(uglify())
//         .pipe(gulp.dest('./js'))

//     // gulp.src('./app/*.jsx')
//     //     .pipe(react())
//     //     .pipe(browserify({
//     //         insertGlobals : true,
//     //         debug : true
//     //     }))
//     //     // .pipe(concat('_compiled.js'))
//     //     .pipe(uglify())
//     //     .pipe(gulp.dest('./js'))
// });


// gulp.task('process-js', function() {
//     gulp.src('./app/*.jsx')
//         .pipe(react())
//         .pipe(browserify({
//             insertGlobals : true,
//             debug : true
//         }))
//         // .pipe(concat('_compiled.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./js'))
// });

// gulp.task('reload-after', ['process-js'], browserSync.reload)

// gulp.task('default', function() {

//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });

//     gulp.watch('./app/*', ['reload-after'])
    
// });



var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

gulp.task('default', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./app/main.jsx');
  return b.bundle()
    .pipe(source('compiled.js'))
    .pipe(gulp.dest('./js'));
});