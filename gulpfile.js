var gulp = require('gulp'),						//引入gulp
	sass = require('gulp-sass'),				// 编译sass
	autoprefixer = require('gulp-autoprefixer'),//添加前缀
	cleancss = require('gulp-clean-css'),		// 压缩css
	rename = require('gulp-rename');			// 重命名


gulp.task('sass',function(){
	gulp.src('./sass/xui.scss')					//匹配文件
	.pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))// 编译sass 选择格式
.pipe(autoprefixer({ browsers: ['last 2 versions', 'Android >= 4.0'], cascade: true,remove:true}))//添加前缀 
	.pipe(gulp.dest('./dist/css'))				//输出一份到dist/css目录
	.pipe(cleancss())							//继续压缩一份css
	.pipe(rename("xui.min.css"))				//重命名避免冲突
	.pipe(gulp.dest('./dist/css'));				//输出压缩后的css
});



gulp.task('watcher',function(){
	gulp.watch('./sass/*.scss',['sass'])		//监听所有sass变动 执行sass任务
})
