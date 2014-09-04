'use strict';

var config = require('../lib/config');

/**
 * grunt-spritesmith
 */
module.exports = {
  sample: {
    'src': ['sprite_files/sample/**/*.png'],
    'destImg': 'img/sprite/sample.png',
    'imgPath': '/img/sprite/sample',
    'padding': 10,
    'cssTemplate': 'styl/sprite.template.mustache',
    'cssVarMap': function (sprite) {
      sprite.image = sprite.image.replace(".png", "");
    },
    'algorithm': 'binary-tree',
    'destCSS': 'styl/sprite/_sample.styl',
    'engine': 'auto'
  }
};
