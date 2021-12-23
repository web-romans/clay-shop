export const copy = () => {
	return app.gulp.src(app.path.src.media)
		.pipe(app.gulp.dest(app.path.build.media))
}