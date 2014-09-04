'use strict';

var config = require('../lib/config');

/**
 * grunt-size-report
 */
module.exports = {
  css:{
    files: {
      list: [
        config.dist + '/public/css/**/*.css'
      ]
    }
  },
  js:{
    files: {
      list: [
        config.dist + '/public/js/*.min.js',
      ]
    }
  }
};
