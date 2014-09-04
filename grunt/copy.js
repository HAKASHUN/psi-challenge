'use strict';

var config = require('../lib/config');

/**
 * grunt-contrib-copy
 */
module.exports = {
  ico: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dist + '/public/ico',
        cwd: 'public/ico'
      }
    ]
  },
  img: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dist + '/public/img',
        cwd: 'public/img'
      }
    ]
  },
  lib: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dist + '/public/lib/',
        cwd: 'public/lib/'
      }
    ]
  },
  js: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dist + '/public/js/',
        cwd: 'public/js/'
      }
    ]
  }
};
