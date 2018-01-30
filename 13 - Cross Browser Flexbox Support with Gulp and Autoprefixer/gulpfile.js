const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", () => {
  gulp.src("src/style.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));
});

gulp.task("watch", () => {
  gulp.watch("src/*.css", ["styles"]);
});
