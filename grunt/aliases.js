'use strict';

/**
 * grunt tasks
 */
module.exports = function(grunt) {
  return {
    'install': [
      'bower:install'
    ],
    'default': [

    ],
    /**
     * 開発時のコンパイルタスク
     *
     * ## html
     *    - そのまま
     * ## css
     *    - stylusからpublic/css以下にcssをコンパイル
     * ## js
     *    - そのまま
     * ## img
     *    - spritesmithでスプライトシート作成
     *    - balmungでresizeとoptimize
     */
    'compile': [
      'compile:img',
      'compile:css'
    ],
    'compile:img': [
      'sprite',
      'balmung:simple'
    ],
    'compile:css': [
      'stylus:compile'
    ],
    /**
     * デプロイするビルドタスク
     *
     * ## html
     *    - 特定のcssをinline化
     *    - htmlをminify
     * ## css
     *    - externalなcssをminify
     * ## js
     *    - concat
     *    - minify
     * ## img
     *    - public/imgをコピーしてもってくる
     */
    'build': [
      'copy:html',
      'copy:ico',
      'copy:img',
      'copy:css',
      'copy:lib',
      'copy:js',
      'build:css',
      'build:js',
      'build:html'
    ],
    'build:html': [
      'inline',
      'htmlmin:build'
    ],
    'build:css': [
      'csscomb',
      'csso'
    ],
    'build:js': [
      'useminPrepare',
      'concat',
      'uglify',
      'usemin'
    ]
  }
};
