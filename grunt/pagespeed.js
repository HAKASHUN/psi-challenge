'use strict';

var config = require('../lib/config');

/**
 * grunt-pagespeed
 */
module.exports = {
  options: {
    paths: ['/', '/about.html'],
    nokey: true,
    locale: "ja_JP",
    threshold: 70
  },
  local: {
    options: {
      strategy: "desktop"
    }
  },
  mobile: {
    options: {
      strategy: "mobile"
    }
  }
};
