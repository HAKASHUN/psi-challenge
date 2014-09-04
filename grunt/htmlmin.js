'use strict';

var config = require('../lib/config');

/**
 * grunt-contrib-copy
 */
module.exports = {
  compile: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [
      {
        expand: true,
        cwd: 'public/',
        src: ['**/*.html'],
        dest: config.dist + '/public'
      }
    ]
  }
};
