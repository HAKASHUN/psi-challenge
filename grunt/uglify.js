'use strict';

var config = require('../lib/config');

/**
 * grunt-contrib-uglify
 */
module.exports = {
  all: {
    options: {
      mangle: true,
      preserveComments: 'some',
      beautify: {
        max_line_len: 40
      },
      compress: {
        drop_console: true
      }
    },
    files: [
      {
        expand: true,
        src: '**/*.js',
        dest:  config.dist + '/public/js',
        cwd:  config.dist + '/public/js'
      },
      {
        expand: true,
        src: '**/*.js',
        dest:  config.dist + '/public/lib',
        cwd:  config.dist + '/public/lib'
      }
    ]
  }
};
