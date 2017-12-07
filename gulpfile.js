var gulp = require('gulp');
var karma = require('gulp-karma');

var allFiles = [
 'node_modules/angular/angular.js', 
 'node_modules/angular/angular.min.js',
 'src/*.js',
 'test/*.js'
];
gulp.task('test', function(coverage) {
  gulp.src(allFiles)
  .pipe(karma({
  configFile: 'karma.conf.js',
  action: 'run'
}))
.on('error', function(err) {
 // Make sure failed tests cause gulp to exit non-zero
   throw err;
 });
});
