'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jshintReporter = require('jshint-stylish'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserify  = require('browserify'),
	gutil       = require('gulp-util'),
	source      = require('vinyl-source-stream'),
	browserSync = require('browser-sync');

/*
 * Create variables for our project paths so we can change in one place
 */

var paths = {
	scripts : {
		src : [
			// './models/**/*.js',
			// './routes/**/*.js',
			// 'keystone.js',
			'public/js/src/**/*.js',
			'!public/js/bower_components/**/*.js',
			'!public/js/lib/**/*.js',
			'!public/js/dist/site.js'
		]
	},

	browserify : {
		src : './public/js/src/site.js',
		outputName : 'site.js',
		dest : 'public/js/dist'
	},

	sass : {
		src : 'public/styles/src/**/*.scss',
		dest : 'public/styles/dist/'
	},

	browserSync : {
		js : 'public/js/dist/site.js',
		css : 'public/styles/dist/site.css',
		templates : 'templates/**/*.hbs'
	}
};

function onError(err) {
    gutil.beep();
    gutil.log(gutil.colors.red(err));

    this.emit('end');
}

gulp.task('lint', function(){
	gulp.src(paths.scripts.src)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));

});

gulp.task('sass', function() {
	gulp.src(paths.sass.src)
		.pipe(sass({errLogToConsole: true}))
		.pipe(autoprefixer('last 2 versions', 'ie 10'))
		.pipe(gulp.dest(paths.sass.dest));
});

gulp.task('browserify', ['lint'], function() {
    return browserify(paths.browserify.src)
        .bundle()
        .on('error', onError)
        .pipe(source(paths.browserify.outputName))
        .pipe(gulp.dest(paths.browserify.dest));
});

gulp.task('browser-sync', function() {
	browserSync({
		proxy: 'localhost:3000',
		files: [
			paths.browserSync.js,
			paths.browserSync.css,
			paths.browserSync.templates
		]
	});
});

gulp.task('watch', function() {

	gulp.start('browserify');
	gulp.watch(paths.scripts.src, ['browserify']);

	gulp.start('sass');
	gulp.watch(paths.sass.src, ['sass']);

	gulp.start('browser-sync');
});

gulp.task('default', function(){
	gulp.start('watch');
});
