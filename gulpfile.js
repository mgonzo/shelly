const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', function () {
      return gulp.src('*.jsx')
          .pipe(babel({
                        presets: ['es2015', 'react']
                    }))
        .pipe(gulp.dest('js'));
});
