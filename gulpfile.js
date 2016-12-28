var gulp = require('gulp');
/**
 * 1.下载插件
 * 2. 引入插件
 * 3. 使用插入
 **/
/**
 * * 不能匹配路径分隔符
 * ** 可以匹配任意字符，并且可以匹配路径分隔符
 * 如何处理JS文件
 */
var $ = require('gulp-load-plugins')();

gulp.task('inject',function(){
    var target = gulp.src('./app/index.html');
    var source = gulp.src([
        "dist/css/all.min.css","dist/js/all.min.js"
    ]);
    target.pipe($.inject(source,{addRootSlash:false,ignorePath:'dist/'}))
        .pipe(gulp.dest('./dist'))
});