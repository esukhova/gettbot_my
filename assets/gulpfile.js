'use strict';

import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);
import cssmin from 'gulp-cssmin';
import rename from 'gulp-rename';
import minify from 'gulp-minify';
import imagemin from 'gulp-imagemin';
import autoprefixer from 'gulp-autoprefixer';
import ghPages from 'gulp-gh-pages';

gulp.task('css', function () {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/index.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('html', function () {
    return gulp.src('../index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('library1', function () {
    return gulp.src('node_modules/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/js/libs'));
});
gulp.task('library2', function () {
    return gulp.src('src/js/libs/jquery-ui.min.js')
        .pipe(gulp.dest('dist/js/libs'));
});
gulp.task('library3', function () {
    return gulp.src('src/js/libs/owl.carousel.min.js')
        .pipe(gulp.dest('dist/js/libs'));
});
gulp.task('library4', function () {
    return gulp.src('src/js/libs/wow.min.js')
        .pipe(gulp.dest('dist/js/libs'));
});


gulp.task('images', function () {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('fonts', function () {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('font_icons', function () {
    return gulp.src('src/fonts/font_icons/*')
        .pipe(gulp.dest('dist/fonts/font_icons'));
});


gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('css'));
    gulp.watch('src/js/*.js', gulp.series('js'));
    gulp.watch('../index.html', gulp.series('html'));
});


gulp.task('staticData', gulp.series('images', 'fonts'));

gulp.task('srcData', gulp.series('css', 'js', 'html'));

gulp.task('default', gulp.series('images', 'fonts', 'font_icons', 'css', 'html', 'js', 'library1', 'library2', 'library3', 'library4', 'watch'));
// gulp.task('srcData', gulp.series('css', 'js', 'html', 'library'));

// gulp.task('deploy', function () {
//     return gulp.src('./dist/**/*')
//         .pipe(ghPages());
// });