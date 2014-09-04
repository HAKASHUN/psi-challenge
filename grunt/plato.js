'use strict';

var config = require('../lib/config');

/**
 * grunt-plato
 */
module.exports = function(grunt) {
  return {
    local:{
      options : {
        jshint : grunt.file.readJSON('.jshintrc')
      },
      files: {
        'reports': ['public/js/**/*.js']
      }
    }
  };
};
