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
        src: ['src/js/*.js'],
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

    // compass
    compass: {
    	dist: {
      	options: {
	        config: 'config.rb'
	      }
	    }
    },

    // imagemin
    imagemin: {                         
	    dynamic: {
        options: {                      
          optimizationLevel: 3
        },                   
	      files: [{
	        expand: true,                 
	        cwd: 'src/img/',                  
	        src: ['**/*.{png,jpg,gif}'],  
	        dest: 'dist/img/'                 
	      }]
	    }
	  },

    // watch
    watch: {
      files: ['src/img/*.{png,jpg,gif}', 'src/scss/*.scss', 'src/js/*.js'],
      tasks: ['concat', 'uglify', 'compass', 'imagemin']
    }

  });

  // load modules
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // register tasks
  grunt.registerTask('default', ['concat', 'uglify', 'compass', 'imagemin']);

};