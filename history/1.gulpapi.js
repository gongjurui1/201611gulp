var gulp = require('gulp');
/**
 * gulp一共只有四个方法
 * task 定义gulp任务
 *   1. 是任务的名字
 *   2. 是任务的定义函数
 **/
gulp.task('default',function(){
    console.log('hello zfpx');
});
/**
 * gulp中的流是文件流，而不是普通的字节流
 * 处理的时候必须是文件为单位
 * 其实里面放的是一个一个文件对象
 * {
 *   content:'' 此文件的内容
 *   filename:'' 此文件的文件名
 * }
 */
gulp.task('html',function(){
    //src 用于获取可读流 里面可以指定路径
    //dist 用于获取可写流，里面可以指定目录。
  gulp.src('./app/index.html')
      .pipe(gulp.dest('./dist'));
});

/**
 * watch 观看 监听
 */
gulp.task('watch',function(){
    //当glob指定的通配符文件发生变化的时候执行对应的函数
 /*gulp.watch('./app/!*.html',function(event){
        console.log(event);
 })*/
 // 当源文件发生改变的时候，执行对应的任务
    gulp.watch('./app/*.html',['html'])
});

