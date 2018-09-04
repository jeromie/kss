
var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify')
    csso = require('gulp-csso');
    prefix = require('gulp-autoprefixer')
    sass = require('gulp-sass');

// Minifies JS
gulp.task('scripts', function(){
    return gulp.src(['./themes/kss/static/js/bootstrap.min.js', './themes/kss/static/js/jquery.fancybox.js', './themes/kss/static/js/slick.min.js', './themes/kss/static/js/jquery.mmenu.all.js', './themes/kss/static/js/jquery.mousewheel.min.js', './themes/kss/static/js/lightgallery-all.min.js', './themes/kss/static/js/lazysizes.min.js', './themes/kss/static/js/slick.min.js'])
    .pipe(uglify())
    .pipe(concat('combine.js'))
    .pipe(gulp.dest('./themes/kss/static/js'))
});

/*==========  Minify and concat different styles files  ==========*/

// SASS Version
gulp.task('sass', function(){
    return gulp.src('./themes/kss/static/scss/custom.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./themes/kss/static/css'))
});

// SCSS Version
//gulp.task('styles', function(){
    //return gulp.src('src/scss/**/*.scss')
    //.pipe(sass())
    //.pipe(prefix('last 2 versions'))
    //.pipe(concat('main.css'))
    //.pipe(minifyCSS())
    //.pipe(gulp.dest('public/css'))
//});


// CSS Version

gulp.task('css', function(){
    return gulp.src('./themes/kss/static/css/*.css')
     .pipe(csso())
     .pipe(concat('combine.css'))
   .pipe(gulp.dest('./themes/kss/static/css'))
});

gulp.task('default', function() {
    gulp.run('scripts')
    gulp.run('css')
    gulp.watch('./themes/kss/static/scss/*.scss', function(){
        gulp.run('sass')
    })
});


