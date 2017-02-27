var gulp = require("gulp");
var pug = require("gulp-pug");
var less = require("gulp-less");
var minifyCSS = require("gulp-csso");
var autoPrefixer = require("gulp-autoprefixer");

gulp.task("css", function(callback){
	return gulp.src("src/less/common/main.less")
		.pipe(less())
		.pipe(autoPrefixer({
			browsers: ["last 10 versions"]
		}))
		.pipe(minifyCSS())
		.pipe(gulp.dest("dist/css"))
});
