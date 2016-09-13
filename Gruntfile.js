module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    _ = require('lodash');

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
	    autoprefixer: {
            options: {
                browsers: ['last 3 versions']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'public/css/',
                    src: '{,*/}*.css',
                    dest: 'public/css/'
                }]
            }
        },
	    template : {
	    	dev: {
	    		files: [
					{
						expand: true,
						cwd: 'html',
						src: '*.html',
						dest: 'public/'
					}
				],	
	    		options: {
	    			data: function() {
		    			var defaultVals = grunt.file.readJSON('templates/default.json');
		    			var dev = grunt.file.readJSON('templates/dev.json');
		    			return _.merge(defaultVals, dev);
		    		}
	    		}
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'html',
						src: '*.html',
						dest: 'public/'
					}
				],	
				options: {
	    			data: function() {
		    			var defaultVals = grunt.file.readJSON('templates/default.json');
		    			var dist = grunt.file.readJSON('templates/dist.json');
		    			return _.merge(defaultVals, dist);	    			}
	    		}
			}
	    },
	    watch: {
			options: {
		    	livereload: true,
			},
			css: {
			    files: ['css/**/*.scss'],
			    tasks: ['sass', 'autoprefixer'],
			},
			html: {
			    files: ['html/*.html', 'templates/*.json'],
			    tasks: ['template:dev'],
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

    var buildTasks = ['clean:public', 'shell:bowerInstall', 'sass', 'autoprefixer', 'copy'];

    grunt.registerTask('default', buildTasks.concat(['template:dev', 'connect:run', 'watch']));

    var distTasks = buildTasks.concat(['template:dist', 'useminPrepare', 'concat', 'cssmin', 'uglify', 'filerev', 'usemin', 'clean:distTemp']);

    grunt.registerTask('dist', distTasks);

    grunt.registerTask('distRun', distTasks.concat(['connect:run:keepalive']));

};