const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var cssimport = require("gulp-cssimport");
var pug = require('gulp-pug');
var options = {};


gulp.task('default', () =>
    gulp.src(['src/header/img/*.png', 'src/jumbotron/img/*.png', 'src/footer/img/*.png', 'src/section_about/img/*.png', 'src/section_our_team/img/*.png', 'src/section_map/img/*.png', 'src/section_project/img/*.png', 'src/section_we_do/img/*.png'])
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
);


gulp.task("import", function() {
    gulp.src("src/*.css")
        .pipe(cssimport(options))
        .pipe(gulp.dest("build/"));
});


gulp.task('pug', function buildHTML() {
  return gulp.src('src/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('build'))
});