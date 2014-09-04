'use strict';

var config = require('../lib/config');

/**
 * grunt-contrib-connect
 */
module.exports = function(grunt) {
  return {
    local: {
      options: {
        livereload: true,
        base: 'public',
        port: config.port.local
      }
    },
    build: {
      options: {
        livereload: true,
        base: 'build/public',
        port: config.port.build,
        keepalive: true
      }
    },
    report: {
      options: {
        livereload: true,
        base: 'build/public',
        port: config.port.report
      }
    }
  };
};
