var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp');

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

gulp.task('sass', function(cb) {
  gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('dist/css'));
  cb();
});

gulp.task('concat', function(cb) {
  gulp.src('src/js/*.js')
  .pipe(concat('test.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
  cb();
});
/*
gulp.task('watch', function() {
  gulp.watch('src/js/*.js', ['concat']);
  gulp.watch('src/image/*', ['minfy']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['copyHTML']);
});
watch(['src/js/*.js', '!input/something.js'], function(cb) {
  // body omitted
  cb();
});
function defaultTask(cb) {
  // place code for your default task here
  //gulp task define tasks
  //gulp src points to files
  //gulp dest points to folders to output
  //gulp watch watch files and folders for change
    
    cb();
  }

exports.default = defaultTask
*/