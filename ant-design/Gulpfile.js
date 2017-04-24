var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    connect = require('gulp-connect');

var sassOptions = {
    errLogToConsole: false,
    outputStyle: 'expanded'
};

var directory = '';

gulp.task('sass', function() {
    return gulp
        .src(directory + 'sass/main.sass')
        .pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(directory + 'css'))
        .pipe(connect.reload());
});

gulp.task('connect', function() {
    connect.server({
        // root: 'leaders_mezzanine/static',
        // port: 8001,
        livereload: true
    });
});

gulp.task('watch', function() {

    gulp.watch(directory + 'sass/**/*.sass', ['sass'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks…');
        });

    gulp.watch('**/*.html', ['html'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks…');
        });

    gulp.watch(directory + 'js/*.js', ['js'])
        .on('change', function(event) {
            console.log('File ' + event.path + ' was ' + event.type + ', running tasks…');
        });
});

gulp.task('html', function() {
    return gulp
        .src('**/*.html')
        .pipe(connect.reload());
});

gulp.task('js', function() {
    return gulp
        .src(directory + 'js/*.js')
        .pipe(connect.reload());
});

gulp.task('copy_plugins', function() {
  gulp.src([
    '../node_modules/jquery/dist/jquery.min.js',
    '../node_modules/foundation-sites/dist/js/foundation.min.js'
  ]).pipe(gulp.dest('js'));
  gulp.src([
    '../node_modules/foundation-sites/dist/css/foundation.min.css'
  ]).pipe(gulp.dest('css'));
});

gulp.task('default', ['copy_plugins', 'sass', 'watch', 'connect']);
