'use strict';

/**
 * grunt-contrib-connect
 */
module.exports = function(grunt) {
  return {
    local: {
      options: {
        livereload: true,
        base: 'public',
        port: 2000
      }
    },
    build: {
      options: {
        livereload: true,
        base: 'build/public',
        port: 3000,
        keepalive: true
      }
    }
  };
};
