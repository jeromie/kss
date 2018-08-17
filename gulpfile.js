var gulp        = require('gulp');
var csso = require('gulp-csso');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('./themes/kss/static/scss/custom.scss')
        .pipe(sass())
        // Minify the file
        .pipe(csso())
        .pipe(gulp.dest("./themes/kss/static/css"))
        .pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('watch', ['sass'], function() {
    gulp.watch(['./themes/kss/static/scss/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);
// gulp.task('default');