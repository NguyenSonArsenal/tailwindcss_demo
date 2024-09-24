const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  return gulp.src('src/scss/*.scss') // Source folder containing your SASS files
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('assets/css')); // Destination folder for compiled CSS files
});

gulp.task('watch', function() {
  gulp.watch('src/scss/*.scss', gulp.series('sass'));
});
