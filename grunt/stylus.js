'use strict';

/**
 * grunt-contrib-stylus
 */
module.exports = function(grunt) {
  return {
    compile: {
      files: {
        // main stylus
        'public/css/inline/main.css': 'styl/inline/main.styl',
        'public/css/main.css': 'styl/main.styl'
      }
    }
  };
};
