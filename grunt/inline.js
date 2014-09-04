'use strict';

var config = require('../lib/config');

/**
 * grunt-inline
 */
module.exports = {
  dist: {
    options:{
      cssmin: true
    },
    src: [config.dest + '/public/index.html'],
    dest: [config.dest + '/public/']
  }
};
