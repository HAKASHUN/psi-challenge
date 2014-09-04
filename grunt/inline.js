'use strict';

var config = require('../lib/config');

/**
 * grunt-inline
 */
module.exports = {
  dist: {
    options:{
      cssmin: false
    },
    src: [config.dest + '/public/**/*.html'],
    dest: [config.dest + '/public/']
  }
};
