"use strict";
var gulp = require('gulp'),
    connect = require("gulp-connect");
var browserSync = require('browser-sync').create();



gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

gulp.task('watch', function () {
    gulp.watch('src/*.js', ['reload']);
    gulp.watch('css/*.css', ['reload']);
    gulp.watch('*.html', ['reload']);
});

gulp.task('default', ['browser-sync', 'watch']);