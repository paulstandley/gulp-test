var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('imgmin', function() {
	gulp.src('src/image/*.png')
		.pipe(imagemin())
    .pipe(gulp.dest('dist/image'))
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