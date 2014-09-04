'use strict';

/**
 * grunt tasks
 */
module.exports = function(grunt) {
  return {
    'default': [
      'balmung:simple'
    ],
    'build': [
      'copy:ico',
      'copy:img',
      'copy:lib',
      'copy:js',
      'htmlmin:compile',
      'uglify'
    ],
    'install': [
      'bower:install'
    ]
  }
};
