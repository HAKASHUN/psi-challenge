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
      'compile',
      'open:local',
      'connect:local',
      'watch'
    ],
    /**
     * 開発時のコンパイルタスク
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
     */
    'build': [
      'clean:build',
      'compile',
      'copy:html',
      'copy:ico',
      'copy:img',
      'copy:css',
      'copy:lib',
      'copy:js',
      'build:css',
      'build:js',
      'build:html',
      'size_report',
      'open:build',
      'connect:build'
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
