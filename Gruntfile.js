module.exports = function(grunt) {

  grunt.initConfig({

  	// read package.json
    pkg: grunt.file.readJSON('package.json'),

    // concat js
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/*.js', '!src/js/libs/*.js'],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    // minify js
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    // imagemin
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**/*.{png,jpg,gif}', '!sprite/*.png'],
          dest: 'dist/img/'
        }]
      }
    },

    // compass
    compass: {
      dist: {
        options: {
          httpPath: '/',
          sassDir: 'src/scss',
          imagesDir: 'src/img',
          cssDir: 'dist/css',
          generatedImagesDir: 'dist/img',
          generatedImagesPath: 'dist/img',
          relativeAssets: true,
          outputStyle: 'expanded' // nested, expanded, compact, compressed.
        }
      }
    },

    // watch
    watch: {
      files: ['src/js/*.js', 'src/img/*.{png,jpg,git}', 'src/scss/*.scss'],
      tasks: ['concat', 'uglify', 'imagemin', 'compass']
    }

  });

  // load modules
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register tasks
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'compass']);

};
