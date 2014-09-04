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
    src: ['public/index.html'],
    dest: [config.dist + '/public/']
  }
};
