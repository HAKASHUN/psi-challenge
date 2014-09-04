'use strict';

var config = require('../lib/config');

/**
 * grunt-contrib-copy
 */
module.exports = {
  ico: {
    files: [
      {
        expand: true,
        src: '**/*',
        dest: config.dist + '/public/ico',
        cwd: 'public/ico'
      }
    ]
  }
};
