module.exports = function(grunt) {
  grunt.initConfig({
    copy: {
      main: {
        src:  'fractal.js',
        dest: 'FractalExplorer/www/js/fractal.js'
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['copy:main']);
};
