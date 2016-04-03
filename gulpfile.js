var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload,
    argv         = require('yargs').argv,
    del          = require('del');
    
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

// compile scss
gulp.task('sass', function() {
  return gulp.src('./source/scss/**/*.{scss,sass}')
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({
      outputStyle: 'compressed'
    }))
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});

// compile jade
gulp.task('jade', function() {
  return gulp.src('source/views/*.jade')
    .pipe(plugins.jade())
    .pipe(gulp.dest('.'));
});

// compile js
gulp.task('script', function() {
  return gulp.src('./source/js/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'));
});

// clean up
gulp.task('clean', function() {  
  return del(['./dist/css/*.css', './dist/js/*.js']);
});

// web service
// gulp.task('webserver', function() {
//   gulp.src('./')
//     .pipe(plugins.webserver({
//       port: 2016,
//       livereload: true,
//       directoryListing: false,
//       open: true,
//       fallback: 'index.html'
//     }));
// });

gulp.task('browser-sync', function() {
  browserSync({
    open: !!argv.open,
    notify: !!argv.notify,
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('build', ['sass', 'script', 'jade']);

gulp.task('serve', ['clean', 'build', 'browser-sync'], function () {
  gulp.watch('./source/scss/**/*.scss', ['sass', reload]);
  gulp.watch('./source/js/*.js', ['script', reload]);
  gulp.watch('./source/views/*.jade', ['jade', reload]);
});

gulp.task('default', ['serve']);
