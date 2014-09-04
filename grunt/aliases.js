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
      'server',
    ],
    'server': [
      'compile',
      'open:local',
      'connect:local',
      'watch'
    ],
    /**
     * 計測タスク
     * - size_report ファイル容量
     * - plato js品質管理
     * - psi-ngrok pagespeed計測
     */
    'report': [
      'connect:build',
      'size_report',
      'plato',
      'psi-ngrok'
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
