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
        dest:  config.dest + '/public/js',
        cwd:  config.dest + '/public/js'
      },
      {
        expand: true,
        src: '**/*.js',
        dest:  config.dest + '/public/lib',
        cwd:  config.dest + '/public/lib'
      }
    ]
  }
};
