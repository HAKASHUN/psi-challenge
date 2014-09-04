'use strict';

var config = require('../lib/config');

/**
 * grunt-csscomb
 */
module.exports = function(grunt) {
  var files = (function() {
    var path = config.dist + '/public/css/**/*.css';
    var sources = grunt.file.expandMapping(path);
    return sources;
  })();

  return {
    all: {
      files: files
    }
  }
};
