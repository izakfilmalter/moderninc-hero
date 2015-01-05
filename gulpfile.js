var gulp         = require('gulp'),
	sass         = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	react        = require('gulp-react');

gulp.task('sass', function() {
	gulp.src('sass/style.sass')
	.pipe(sass({
		style: 'expanded',  // default: 'nested'. Other options: 'compact', 'compressed', 'expanded'
		debugInfo: false //use Firesass Firebug plugin if true
	}))
	.on('error', function (err) { console.log(err.message); })
	// .pipe(autoprefixer({
	// 	browsers: ['last 2 versions'],
	// 	cascade: true //for nice and pretty vendor prefixe cascades
	// }))
	.pipe(gulp.dest('public/css'));
});

gulp.task('prefix', function() {
	gulp.src('public/css/main.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('public/css/main.css'));
});

gulp.task('react', function() {
	gulp.src('pathtoreplace/filetoreplace.jsx')
		.pipe(react())
		.pipe(gulp.dest('destinationpath'));
});

gulp.watch('sass/**/*.sass', ['sass']);
gulp.watch('public/css/*.css', ['prefix']);

gulp.task('default', [
					'sass'
					//no need to call 'prefix'. It will trigger after sass task has finished
					//add the 'react' task when you are ready
					]);