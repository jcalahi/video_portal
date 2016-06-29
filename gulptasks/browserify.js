var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

module.exports = function() {
    return browserify('./client/src/modules/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./client'));
};