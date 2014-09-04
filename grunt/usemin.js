'use strict';

var config = require('../lib/config');

/**
 * grunt-usemin
 */
module.exports = {
  options: {
    dirs: [ config.dist + "/public"]
  },
  html: [
      config.dist + '/public/{,*/}*.html'
  ]
};
