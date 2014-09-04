'use strict';

/**
 * grunt-bower-task
 */
module.exports = {
  install: {
    options: {
      targetDir: './public/lib',
      install: true,
      copy: true,
      verbose: true,
      cleanTargetDir: true,
      cleanBowerDir: false
    }
  }
};
