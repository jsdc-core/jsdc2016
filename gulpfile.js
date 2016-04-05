var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;
var argv         = require('yargs').argv;
var del          = require('del');

var plugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

// 編譯 scss
gulp.task('scss', function() {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/css'));
});

// 編譯 jade
gulp.task('jade', function() {
  return gulp.src('source/views/*.jade')
    .pipe(plugins.jade())
    .pipe(gulp.dest('.'));
});

// 將 js 編譯成 min js
gulp.task('script', function() {
  return gulp.src('./source/js/*.js')
    .pipe(plugins.plumber())
    .pipe(plugins.uglify())
    .pipe(plugins.rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/js'));
});

// 清掉 dist 裡面 css 跟 js 的資料夾
gulp.task('clean', function() {
  return del(['./dist/css/*.css', './dist/css/*.map', './dist/js/*.js']);
});

gulp.task('browser-sync', function() {
  browserSync({
    open: !!argv.open,
    notify: !!argv.notify,
    server: {
      baseDir: './'
    }
  });
});

gulp.task('build', ['scss', 'script', 'jade']);

gulp.task('serve', ['clean', 'build', 'browser-sync'], function () {
  gulp.watch('./source/scss/**/*.scss', ['scss', reload]);
  gulp.watch('./source/js/*.js', ['script', reload]);
  gulp.watch('./source/views/**/*.jade', ['jade', reload]);
});

gulp.task('default', ['serve']);
