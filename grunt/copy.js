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
        dest: config.dest + '/public',
        cwd: 'public'
      }
    ]
  },
  ico: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dest + '/public/ico',
        cwd: 'public/ico'
      }
    ]
  },
  img: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dest + '/public/img',
        cwd: 'public/img'
      }
    ]
  },
  lib: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dest + '/public/lib/',
        cwd: 'public/lib/'
      }
    ]
  },
  js: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dest + '/public/js/',
        cwd: 'public/js/'
      }
    ]
  },
  css: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dest + '/public/css/',
        cwd: 'public/css/'
      }
    ]
  }
};
