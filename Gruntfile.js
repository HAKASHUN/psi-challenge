'use strict';

var ngrok = require('ngrok');

module.exports = function(grunt) {
  // measures the time each task takes
  require('time-grunt')(grunt);
  // load grunt config
  require('load-grunt-config')(grunt);


  // Register customer task for ngrok
  grunt.registerTask('psi-ngrok', 'Run pagespeed with ngrok', function() {
    var done = this.async();
    var port = 4000;

    ngrok.connect(port, function(err, url) {
      if (err !== null) {
        grunt.fail.fatal(err);
        return done();
      }
      grunt.config.set('pagespeed.options.url', url);
      grunt.task.run('pagespeed');
      done();
    });
  });
};
