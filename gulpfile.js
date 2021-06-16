'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    rigger = require('gulp-rigger'),
    rimraf = require('rimraf'),
    del = require('del'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    stripComments = require('gulp-strip-css-comments'),
    beutify = require('gulp-cssbeautify'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    cleancss = require('gulp-clean-css'),
    csso = require('gulp-csso'),
    sourcemaps = require('gulp-sourcemaps'),
    imagemin = require('gulp-imagemin'),
    imageminPngquant = require('imagemin-pngquant'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();


var path = {

    build: {
        html: 'build/',
        styles: 'build/styles/',
        libs: 'build/libs',
        img: 'build/images/',
        scripts: 'build/scripts/',
        fonts: 'build/fonts/',
        projects: 'build/projects'
    },

    src: {
        html: 'src/*.html',
        styles: 'src/styles/*.sass',
        libs: 'src/libs/**/**.*',
        imgmin: 'src/images/min/**/*.*',
        imgmax: 'src/images/max/**/*.*',
        imgsvg: 'src/images/svg/**/*.*',
        scripts: 'src/scripts/**/*.js',
        fonts: 'src/fonts/**/*.*',
        projects: 'src/projects/**/*.*'
    },

    watch: {
        html: 'src/*.html',
        styles: 'src/styles/**/*.*',
        img: 'src/images/',
        scripts: 'src/scripts',
        fonts: 'src/fonts/'
    },

    clean: './build'
};

gulp.task('clean', function(){
    return del('build');
});

gulp.task('html:build', function(){
    return gulp.src(path.src.html)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html));
});

gulp.task('styles:build', function(){
    return gulp.src(path.src.styles)
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(stripComments())
        .pipe(beutify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.styles))
        .pipe(csso({
            sourceMap: true
        }))
        .pipe(rename("app.min.css"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.styles))
});

gulp.task('scripts:build', function(){
    return gulp.src(path.src.scripts)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(path.build.scripts))
        .pipe(uglify())
        .pipe(stripComments())
        .pipe(rename("app.min.js"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.scripts));
});

gulp.task('img:build', function(){
    return gulp.src(path.src.imgmin)
        .pipe(imagemin([
            imageminPngquant({
                speed: 5,
                quality: [0.6, 0.8]
            })
        ]))
        .pipe(gulp.dest(path.build.img))
        .pipe(gulp.src(path.src.imgmax))
        .pipe(gulp.dest(path.build.img))
        .pipe(gulp.src(path.src.imgsvg))
        .pipe(gulp.dest(path.build.img));
});

gulp.task('fonts:build', function(){
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('projects:build', function(){
    return gulp.src(path.src.projects)
        .pipe(gulp.dest(path.build.projects))
});

gulp.task('libs:build', function(){
    return gulp.src(path.src.libs)
        .pipe(gulp.dest(path.build.libs))
});


gulp.task('build', gulp.series(
        'clean', gulp.series(['html:build', 'styles:build', 'scripts:build', 'img:build', 'fonts:build', 'libs:build', 'projects:build'])
    )
);

gulp.task('watch', function(){
    gulp.watch(path.watch.html, gulp.series('html:build'));
    gulp.watch(path.watch.styles, gulp.series('styles:build'));
    gulp.watch(path.watch.scripts, gulp.series('scripts:build'));
    gulp.watch(path.watch.img, gulp.series('img:build'));
    gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: "./build",
        port: 4000,
        notify: false
    });

    browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});



gulp.task('default', gulp.series(
    'clean', 'build', gulp.parallel('watch', 'serve')
));







