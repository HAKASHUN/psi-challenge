'use strict';

/**
 * grunt-contrib-stylus
 */
module.exports = function(grunt) {
  return {
    compile: {
      options: {
        compress: false
      },
      files: {
        // main stylus
        'public/css/inline/main.css': 'styl/inline/main.styl',
        'public/css/main.css': 'styl/main.styl'
      }
    }
  };
};
