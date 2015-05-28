module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/materialize.css' : 'css/materialize.scss'
        }
        options: {
          style: 'compressed'
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          '' : ''
        }
      }
    },
    watch: {
      css: {
        files: ['css/**/*.css'],
        tasks: ['sass'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['sass', 'watch']);
};
