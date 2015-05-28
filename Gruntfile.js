module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/materialize.css' : 'css/materialize.scss'
        },
        options: {
          style: 'compressed'
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          'css/style.min.css' : 'css/style.css'
        }
      }
    },
    watch: {
      css: {
        files: ['css/**/*.css'],
        tasks: ['cssmin'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['cssmin', 'watch']);
};
