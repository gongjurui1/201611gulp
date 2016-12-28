var gulp = require('gulp');
/**
 * 1.下载插件
 * 2. 引入插件
 * 3. 使用插入
 **/
/**
 * * 不能匹配路径分隔符
 * ** 可以匹配任意字符，并且可以匹配路径分隔符
 */
var less = require('gulp-less');
gulp.task('css',function(){
    gulp.src('./app/less/**/*.less')
    //把less文件编译成css
        .pipe(less())
        .pipe(gulp.dest('./dist/css'));
});