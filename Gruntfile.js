module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
	    sass: {		
			dist: {
			    files: [
				    {
						expand: true,
						cwd: 'css',
						src: '**/*.scss',
						dest: 'public/css/',
						ext: '.css'
				    }
			   	]					
			}
	    },
	    watch: {
			options: {
		    	livereload: true,
			},
			css: {
			    files: ['css/**/*.scss'],
			    tasks: ['sass'],
			},
			html: {
			    files: ['html/*.html'],
			    tasks: ['copy:html'],
			},
			js: {
		     	    files: ['js/**/*.js'],
			    tasks: ['copy:js'],
			},
			assets: {
		            files: ['assets/**/*'],
			    tasks: ['copy:assets'],
			}
	    },
	    connect: {
	    	run : {
	    		options: {
	    			hostname: '0.0.0.0',
	    			base: 'public',
	    			livereload: true,
	    			open: true
	    		}
	    	}
	    },
        shell: {
            bowerInstall: {
                command: 'bower install'
            }
        },
	    copy: {
	    	html: {
				files: [
					{
						expand: true,
						cwd: 'html',
						src: '*.html',
						dest: 'public/'
					}
				]
	    	},
	    	js: {
				files: [					
					{
						expand: true,
						cwd: 'js',
						src: '**/*.js',
						dest: 'public/js/'
					}
				]
	    	},
	    	assets: {
				files: [					
					{
						expand: true,
						cwd: 'assets',
						src: '**/*',
						dest: 'public/assets/'
					}
				]
	    	}
	    },
	    filerev: {
	    	css: {
	    		src: ['public/styles/**/*.css']
	    	},
	    	js: {
	    		src: ['public/scripts/**/*.js']
	    	}
	    },
	    useminPrepare: {
		  	html: 'public/*.html',
        	options: {
                dest: 'public'
            }
		},
	    usemin: {
		  	html: 'public/*.html',
			css: 'public/css/{,*/}*.css',
			options: {
		    	assetsDirs: ['public']
		  	}
		},
	    clean: {
	    	public: {
    			src: ['public/*', '!public/bower_components/**']
	    	},
	    	distTemp: {
    			src: ['public/js', 'public/css']
	    	}
	    }
	});

    var buildTasks = ['clean:public', 'shell:bowerInstall', 'sass', 'copy'];

    grunt.registerTask('default', buildTasks.concat(['connect:run', 'watch']));

    var distTasks = buildTasks.concat(['useminPrepare', 'concat', 'cssmin', 'uglify', 'filerev', 'usemin', 'clean:distTemp']);

    grunt.registerTask('dist', distTasks);

    grunt.registerTask('distRun', distTasks.concat(['connect:run:keepalive']));

};