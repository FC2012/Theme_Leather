var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');
    less        = require('gulp-less');
    path        = require('path');


//---------task sass
gulp.task('sass', function() {      // 'sass' - name
  return gulp.src('app/sass/**/*.sass')
   .pipe(sass())
   .pipe(gulp.dest('app/css'))
   .pipe(browserSync.reload({stream: true}))

});

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    },
      notify: false
  })
})

gulp.task('less', function () {
  return gulp.src('app/less/**/*.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('app/css'));
});


//-----------task watch
gulp.task('watch', ['browser-sync','sass','less'], function() {
  // , ['browser-sync','sass'], - do before reload

  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/less/**/*.less', ['less']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

// gulp.task('watch', ['browser-sync','less'], function() {
//   // , ['browser-sync','sass'], - do before reload
//
//   gulp.watch('app/sass/**/*.sass', ['sass']);
//   gulp.watch('app/less/**/*.less', ['less']);
//   gulp.watch('app/*.html', browserSync.reload);
//   gulp.watch('app/js/**/*.js', browserSync.reload);
// });
