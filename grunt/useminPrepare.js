'use strict';

var config = require('../lib/config');

/**
 * grunt-useminPrepare
 */
module.exports = {
  options: {
    root: "public",
    dest: config.dest + "/public"
  },
  html: [config.dest + "/public/**/*.html"]
};
