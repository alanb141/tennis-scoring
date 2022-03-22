const { src, dest, watch, parallel } = require("gulp");
const sass = require('gulp-sass')(require('sass'));

function compileCSS(cb) {
    src('css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
    cb();
}

function watchFiles(cb) {
    watch('css/**.scss', compileCSS);
}

exports.watch = watchFiles;
 
exports.css = compileCSS;