'use strict';

var config = require('../lib/config');

/**
 * grunt-csso
 */
module.exports = function(grunt) {
  var files = (function() {
    var path = config.dist + '/public/css/**/*.css';
    var sources = grunt.file.expandMapping(path);
    sources.forEach(function(source) {
      source.src = source.src;
      source.dest = source.dest;
    });
    return sources;
  })();

  return {
    dist: {
      files: files
    }
  }
};
