module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // css minify
        cssmin: {
            target: {
                files: [{
                    'www/css/main.min.css': [
                        'node_modules/open-sans-fontface/open-sans.css',
                        'node_modules/@fortawesome/fontawesome-free/css/all.css',
                        'node_modules/perfect-scrollbar/css/perfect-scrollbar.css',
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                    ],
                    'www/css/sidebar.min.css': [
                        'node_modules/sidebar-menu-compostrap/dist/css/sidebar.css',
                    ],
                    'www/css/sidebar.2.min.css': [
                        'node_modules/sidebar-menu-2-compostrap/dist/css/sidebar.css',
                    ],
                    'www/css/sidebar.skeleton.min.css': [
                        'node_modules/sidebar-menu-skeleton-compostrap/dist/css/sidebar.css',
                    ],
                    'www/css/navbar.logged.min.css': [
                        'node_modules/navbar-user-logged-compostrap/dist/css/logged.css',
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
                        'node_modules/nanobar/nanobar.js'
                    ],
                    'www/js/sidebar.min.js': [
                        'node_modules/sidebar-menu-compostrap/dist/js/sidebar.menu.js'
                    ],
                    'www/js/sidebar.2.min.js': [
                        'node_modules/sidebar-menu-2-compostrap/dist/js/sidebar.menu.js'
                    ],
                    'www/js/sidebar.skeleton.min.js': [
                        'node_modules/sidebar-menu-skeleton-compostrap/dist/js/sidebar.menu.js'
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