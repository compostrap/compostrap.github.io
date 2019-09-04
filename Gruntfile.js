module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // css minify
        cssmin: {
            target: {
                files: [{
                    'www/css/style.min.css': [
                        'node_modules/open-sans-fontface/open-sans.css',
                        'node_modules/@fortawesome/fontawesome-free/css/all.css',
                        'node_modules/perfect-scrollbar/css/perfect-scrollbar.css',
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                        'node_modules/sidebar-menu-compostrap/dist/css/sidebar.css',
                    ]
                }]
            }
        },

        // copy files
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'node_modules/@fortawesome/fontawesome-free/webfonts/',
                    src: ['**'],
                    dest: 'www/webfonts/'
                },
                    {
                        expand: true,
                        cwd: 'node_modules/open-sans-fontface/fonts/',
                        src: ['**'],
                        dest: 'www/css/fonts/'
                    }
                ]
            }
        },

        // js minify
        uglify: {
            options: {
                reserved: ['jQuery']
            },
            my_target: {
                files: {
                    'www/js/main.min.js': [
                        'node_modules/jquery/dist/jquery.js',
                        'node_modules/perfect-scrollbar/dist/perfect-scrollbar.js',
                        'node_modules/popper/dist/popper.js',
                        'node_modules/bootstrap/dist/js/bootstrap.js',
                        'node_modules/nanobar/nanobar.js',
                        'node_modules/sidebar-menu-compostrap/dist/js/sidebar.menu.js'
                    ]
                }
            }
        }
    });

    // grunt tasks
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('grunt-all', ['cssmin', 'uglify', 'copy']);
};