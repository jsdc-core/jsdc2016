var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

// 監視 scss
gulp.task('sass', function() {
  return gulp.src('./source/scss/*.scss')
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

// 監視 scss
gulp.task('sass:watch', function() {
    gulp.watch('./source/scss/**/*.scss', ['sass']);
});

// 編譯 js
gulp.task('script', function() {
  return gulp.src('./source/js/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'));
});

// 監視 js
gulp.task('script:watch', function() {
  gulp.watch('./source/js/*.js', ['script']);
});

// 編譯 jade
gulp.task('jade', function() {
  return gulp.src('source/views/*.jade')
    .pipe(plugins.jade())
    .pipe(gulp.dest('.'));
});

// 監視 jade
gulp.task('jade:watch', function() {
  gulp.watch('source/views/*.jade', ['jade']);
});

// 開啟一個 web service
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(plugins.webserver({
      port: 2016,
      livereload: true,
      directoryListing: false,
      open: true,
      fallback: 'index.html'
    }));
});

gulp.task('default', ['sass', 'script', 'jade', 'sass:watch', 'script:watch', 'jade:watch', 'webserver']);
