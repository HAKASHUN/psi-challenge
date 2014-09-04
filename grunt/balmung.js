'use strict';

var _ = require('lodash');
var config = require('../lib/config');
/**
 * grunt-balmung
 */
module.exports = {
  simple: {
    config: {
      src: 'img',
      dst: 'public/img',
      resize: {
        ratio: config.ratio,
        base: _.max(config.ratio),
        unsharp: {
          radius: 2,
          sigma: 1.4,
          amount: 0.5,
          threshold: 0
        },
        concurrency: 4,
        dirname: '{dirname}',
        filename: '{basename}_{ratiox10}{extname}'
      }
    }
  }
};
