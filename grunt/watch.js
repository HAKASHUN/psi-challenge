'use strict';

/**
 * grunt-contrib-watch
 */
module.exports = {
  stylus: {
    files: ['styl/**/*.styl'],
    tasks: ['stylus:compile'],
    options: {
      livereload: true
    }
  },
  img: {
    files: ['img/**/*'],
    tasks: ['balmung:simple'],
    options: {
      livereload: true
    }
  }
};
