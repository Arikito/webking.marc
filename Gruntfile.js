module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			options: {
				spawn: true,
			},
			scss: {
				files: ['**/*.scss'],
				tasks: ['sass'],
			},
			uglify: {
				files: ['wp-content/themes/marcsolutions/js/*.js', '!wp-content/themes/marcsolutions/js/*.min.js'],
				tasks: ['uglify:build'],
			},
			// all: {
			// 	files: ['**/*.php', '**/*.html', '**/*.css'],
			// }
		},
		sass: {
			options: {
				style: 'compact'
			},
			dist: {
				files: {
					'wp-content/themes/marcsolutions/style.css': 'wp-content/themes/marcsolutions/sass/style.scss'
				}
			}
		},
		uglify: {
			options: {
				// banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				files: [
					{
						expand: true,
						cwd: 'wp-content/themes/marcsolutions/js/',
						src: ['*.js', '!*.min.js'],
						dest: 'wp-content/themes/marcsolutions/js/',
						ext: '.min.js'
					}
				],
			}
		}
	});

	// Load the plugin that provides the task.
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'uglify', 'watch']);

};