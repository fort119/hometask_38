const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const htmlmin = require('gulp-htmlmin');
const del = require('del');
const uglify = require('gulp-uglify');


const css = () => {
  return src('css/secondary-css/**.css')
    .pipe(csso())
    .pipe(concat('style.css'))
    .pipe(dest('css'));
}

const html = () => {
  return src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

const js = () => {
  return src('js/**.js')
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'));
}
const launch = gulp.series(css, html, js);

gulp.task('default', launch);