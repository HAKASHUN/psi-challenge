'use strict';

var config = require('../lib/config');

/**
 * grunt-spritesmith
 */
module.exports = {
  sample: {
    'src': [
      'sprite_files/sample/*.png'
    ],
    'destImg': 'public/img/sprite/sample.png',
    'destCSS': 'styl/sprite/_sample.styl',
    'algorithm': 'diagonal',
    'padding': 3,
    'cssVarMap': function (sprite) {
      sprite.name = 'sh-sp-' + sprite.name;
    },
    'cssOpts': {
      'functions': false
    }
  }
};
