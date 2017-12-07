// karma config file - project - test AngularJs 
module.exports = function(config) {
 config.set({
 frameworks: ['jasmine'],
  files: [
  'node_modules/angular/angular.min.js',
  'node_modules/angular-mocks/angular-mocks.js',
  'app/*.js', 
  'test/*.js'
],
 plugins: [
 'karma-phantomjs-launcher',
 'karma-jasmine',
 'karma-coverage'
 ],
 // start these browsers
 browsers: ['PhantomJS'],
 reporters: ['progress', 'coverage'],
 preprocessors: {
 'app/scripts/*.js': ['coverage']
 },
 coverageReporter: {
 type: 'html',
 dir: 'coverage'
 },
 logLevel: config.LOG_INFO,
 singleRun: false
 });
};
