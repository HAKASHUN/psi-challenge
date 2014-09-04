'use strict';

var config = require('../lib/config');

/**
 * grunt-contrib-copy
 */
module.exports = {
  build: {
    options: {
      removeComments: true,
      collapseWhitespace: true
    },
    files: [
      {
        expand: true,
        cwd: config.dist + '/public',
        src: ['**/*.html'],
        dest: config.dist + '/public'
      }
    ]
  }
};
