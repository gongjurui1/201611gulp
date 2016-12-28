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

gulp.task('serve',function(){
   $.connect.server({
      port:8080,
      root:'dist',
      //启动实时刷新的功能
      livereload:true
   });
});
gulp.task('html',function(){
   gulp.src('./app/index.html')
       .pipe(gulp.dest('./dist'))
       //通知浏览器自动刷新
       .pipe($.connect.reload());
});
gulp.task('watch',function(){
   gulp.watch('./app/index.html',['html']);
});

gulp.task('default',['serve','watch']);