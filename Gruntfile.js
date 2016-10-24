module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
            expand: true,
            cwd: 'source/views/',
            src: ['*.jade'],
            dest: 'public/',
            ext: '.html'
          }, {
            expand: false,
            cwd: 'source/views/blocks',
            src: ['*.jade'],
            dest: 'public/blocks',
            ext: '.html'
          }
        ]
      }
    },
    less: {
      build: {
        options: {
          compress: false
        },
        files: [{
            'public/css/style.css': 'source/assets/css/style.less'
          }
        ]
      }
    },
    concat: {
      libs: {
        src:  'source/assets/js/libs/*.js',
        dest: 'public/js/libs.js'
      },
      plugins: {
        src: 'source/assets/js/plugins/*.js',
        dest: 'public/js/plugins.js'
      },
      start: {
        src: 'source/assets/js/start.js',
        dest: 'public/js/start.js'
      },
      job_search: {
        src: 'source/assets/js/actions/job-search.js',
        dest: 'public/js/actions/job-search.js'
      },
      filter_form: {
        src: 'source/assets/js/actions/filter-form.js',
        dest: 'public/js/actions/filter-form.js'
      },
      job_profile: {
        src: 'source/assets/js/actions/job-profile.js',
        dest: 'public/js/actions/job-profile.js'
      },
      job_detail: {
        src: 'source/assets/js/actions/job-detail.js',
        dest: 'public/js/actions/job-detail.js'
      },
      search_job_js: {
        src: 'source/assets/js/actions/search_job.plg.js',
        dest: 'public/js/actions/search_job.plg.js'
      },
      template: {
        src: 'source/assets/js/template.js',
        dest: 'public/js/template.js'
      },
      coming_soom: { 
        src: 'source/assets/js/coming.soon.config.js',
        dest: 'public/js/coming.soon.config.js'
      },
      google_map: {
        src: 'source/assets/js/google.map.config.js',
        dest: 'public/js/google.map.config.js'
      }
    },
    copy: {
      the_project: {
        files: [{
            expand: true,
            cwd: 'source/assets/js/the_project/',
            src: '**/*',
            dest: 'public/js/the_project/'
          }
        ]
      },
      ajax: {
        files: [{
            expand: true,
            cwd: 'source/views/ajax/',
            src: '*',
            dest: 'public/ajax/'
          }
        ]
      },
      robots: {
        files: [{
            expand: true,
            cwd: 'source/assets/robots/',
            src: '*',
            dest: 'public'
          }
        ]
      },
      images: {
        files: [{
            expand: true,
            cwd: 'source/assets/images/',
            src: '**/*',
            dest: 'public/images/'
          }
        ]
      },
      uploads: {
        files: [{
            expand: true,
            cwd: 'source/assets/uploads/',
            src: '**/*',
            dest: 'public/uploads/'
          }
        ]
      },
      fonts: {
        files: [{
            expand: true,
            cwd: 'source/assets/fonts/',
            src: '**/*',
            dest: 'public/fonts/'
          }
        ]
      },
      icons: {
        files: [{
          expand: true,
          cwd: 'source/assets/icons/',
          src: '**/*',
          dest: 'public/icons/'
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: ['source/assets/js/plugins/plugin-*.js', 'source/assets/js/*.js',  'source/assets/js/actions/*.js' ]
    },
    watch: {
      js: {
        files: ['source/assets/js/plugins/*.js', 'source/assets/js/*.js',  'source/assets/js/actions/*.js'],
        tasks: ['concat']
      },
      jade: {
        files: ['source/views/**/*.jade'],
        tasks: ['jade']
      },
      less: {
        files: ['source/assets/css/**/*.less'],
        tasks: ['less:build']
      },
      ajax: {
        files: ['source/views/ajax/**/*.*'],
        tasks: ['copy:ajax']
      },
      fonts: {
        files: ['source/assets/fonts/**/*'],
        tasks: ['copy:fonts']
      },
      images: {
        files: ['source/assets/images/**/*'],
        tasks: ['copy:images']
      },
      uploads: {
        files: ['source/assets/uploads/**/*'],
        tasks: ['copy:uploads']
      }
    },
    cssmin: {
      compress: {
        files: [{
            'public/css/style.css': 'public/css/style.css'
          }
        ]
      }
    },
    usemin: {
      // html: ['public/**/*.html'],
      css: ['public/css/**/*.css']
    },
    uglify: {
      options: {
        compress: true,
        beautify: false,
        preserveComments: false
      },
      libs: {
        files: [{
            'public/js/libs.js': 'source/assets/js/libs/jquery-1.9.1.js'
          }
        ]
      },
      plugins: {
        files: [{
            'public/js/plugins.js': 'public/js/plugins.js'
          }
        ]
      }
    },
    clean: {
      build: ['public']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask('default', ['clean:build', 'concat', 'less:build', 'jade', 'copy']);
  grunt.registerTask('build', 'default');
  grunt.registerTask('release', ['build', 'uglify', 'cssmin', 'usemin']);
  grunt.registerTask('deploy', ['build', 'uglify' ]);

};
