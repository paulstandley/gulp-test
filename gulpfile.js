var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');


gulp.task('imgmin', function(cb) {
	gulp.src('src/image/*.png')
		.pipe(imagemin())
    .pipe(gulp.dest('dist/image'));
    cb();
});

gulp.task('minify', function(cb) {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
  cb();
});

gulp.task('message', function(cb) {
  console.log('Gulp is running :)');
  cb();
});

gulp.task('copyHTML', function(cb) {
  gulp.src('src/*.html')
      .pipe(gulp.dest('dist'));
      cb();
});

gulp.task('default', function(cb) { 
  console.log('default is running');
  cb();
});

gulp.task('sass', function(cb) {
  gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
  cb();
});

function defaultTask(cb) {
  // place code for your default task here

/*
  gulp task define tasks
  gulp src points to files
  gulp dest points to folders to output
  gulp watch watch files and folders for change
*/

    cb();
  }

exports.default = defaultTask