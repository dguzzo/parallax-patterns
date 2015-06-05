module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['*.sass'],
      tasks: ['sass']
    },
    sass: {
      options: {
        'sourcemap=none': ''
      },
      dist: {
        files: {
          '<%= pkg.name %>.css': 'parallax-patterns.sass'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);
};
