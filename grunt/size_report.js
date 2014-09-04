'use strict';

var config = require('../lib/config');

/**
 * grunt-size-report
 */
module.exports = {
  css:{
    files: {
      list: [
        config.dest + '/public/css/**/*.css'
      ]
    }
  },
  js:{
    files: {
      list: [
        config.dest + '/public/js/*.min.js',
      ]
    }
  }
};
