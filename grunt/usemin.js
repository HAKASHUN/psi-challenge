'use strict';

var config = require('../lib/config');

/**
 * grunt-usemin
 */
module.exports = {
  options: {
    dirs: [ config.dest + "/public"]
  },
  html: [
      config.dest + '/public/{,*/}*.html'
  ]
};
