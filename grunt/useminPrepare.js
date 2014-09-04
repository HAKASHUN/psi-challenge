'use strict';

var config = require('../lib/config');

/**
 * grunt-useminPrepare
 */
module.exports = {
  options: {
    root: "public",
    dest: config.dist + "/public"
  },
  html: [config.dist + "/public/**/*.html"]
};
