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
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
gulp.task('js',function(){
   gulp.src('./app/js/**/*.js')
       .pipe(concat('all.js'))
       .pipe(gulp.dest('./dist/js'))
       .pipe(uglify())
       .pipe(rename('all.min.js'))
       .pipe(gulp.dest('./dist/js'));
});
