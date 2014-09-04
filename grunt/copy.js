'use strict';

var config = require('../lib/config');

/**
 * grunt-contrib-copy
 */
module.exports = {
  html: {
    files: [
      {
        expand: true,
        src: '**/*.html',
        dest: config.dist + '/public',
        cwd: 'public'
      }
    ]
  },
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
  },
  css: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dist + '/public/css/',
        cwd: 'public/css/'
      }
    ]
  }
};
