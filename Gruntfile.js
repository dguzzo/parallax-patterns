module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: ['bower_components/angular/angular.min.js', 'javascripts/<%= pkg.name %>.js', 'javascripts/components/*.js'],
        dest: 'javascripts/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      files: ['javascripts/**/*.js', '*.sass', 'public/index.html'],
      tasks: ['default']
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

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'concat', 'watch']);
};
