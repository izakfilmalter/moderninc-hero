module.exports = function(grunt) {
  grunt.initConfig({

    sass: {
      development: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/style.css': 'sass/style.sass'
        }
      }
    },

    watch: {
      sass: {
        files: [
          'sass/*.sass',
          'sass/**/*.sass',
          'sass/**/**/*.sass',
          'sass/*.scss',
          'sass/**/*.scss',
          'sass/**/**/*.scss',
        ],
        tasks: ['sass']
      },
      html: {
        files: ['*.html']
      },
      options: {
        livereload: true,
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);

};
