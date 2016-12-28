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
// gulp-less gulp-cleanCss
gulp.task('css',function(){
   gulp.src('./app/less/**/*.less')
       .pipe($.less())
       .pipe($.concat('all.css'))
       .pipe(gulp.dest('./dist/css'))
       .pipe($.cleanCss())
       .pipe($.rename('all.min.css'))
       .pipe(gulp.dest('./dist/css'));
});
