var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    react = require('gulp-react'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify'),
    reactify = require('reactify'),
    streamify = require('streamify'),
    babelify = require('babelify'),
    sassify = require('sassify'),
    htmlreplace = require('gulp-html-replace');

var path = {
    HTML: 'src/index.html',
    ALL: ['src/*.js', 'src/component/**/*.js', 'src/index.html', 'src/style/**/*.scss'],
    JSX: ['src/app.jsx'],
    SASS: ['src/style/**/*.scss'],
    MINIFIED_OUT: 'build.min.js',
    DEST_CSS_BUILD: 'build/css',
    DEST_JS_BUILD: 'build/js',
    DEST: 'build'
};

gulp.task('react', function(){
    gulp.src(path.JSX)
        .pipe(browserify({
            transform: [babelify.configure({presets: ["es2015", "react", "stage-1"]}), reactify],
            extensions: ['.jsx']
        }))
        .pipe(uglify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest(path.DEST_JS_BUILD))
});

gulp.task('copy', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});


gulp.task('styles', function() {
    gulp.src(path.SASS)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.DEST_CSS_BUILD));
});

gulp.task('build', ['react', 'copy', 'styles']);

gulp.task('watch',function() {
    gulp.watch(path.ALL,['build']);
});
