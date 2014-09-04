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
      'htmlmin:compile'
    ],
    'install': [
      'bower:install'
    ]
  }
};
