'use strict';

var config = require('../lib/config');

/**
 * grunt-plato
 * - http://qiita.com/shoito/items/cca3ae1cc6b0895c9455
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
