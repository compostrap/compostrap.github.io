module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // css minify
        cssmin: {
            target: {
                files: [{
                    'www/css/skeleton.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                        'node_modules/sidebar-skeleton-compostrap/dist/css/sidebar.css',
                    ],
                    'www/css/sidebar.menu.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                        'node_modules/sidebar-skeleton-compostrap/dist/css/sidebar.css',
                        'node_modules/open-sans-fontface/open-sans.css',
                        'node_modules/@fortawesome/fontawesome-free/css/all.css',
                        'node_modules/perfect-scrollbar/css/perfect-scrollbar.css',
                        'node_modules/sidebar-menu-compostrap/dist/css/sidebar.menu.css',
                    ],
                    'www/css/sidebar.menu.custom.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                        'node_modules/sidebar-skeleton-compostrap/dist/css/sidebar.css',
                        'node_modules/open-sans-fontface/open-sans.css',
                        'node_modules/@fortawesome/fontawesome-free/css/all.css',
                        'node_modules/perfect-scrollbar/css/perfect-scrollbar.css',
                        'node_modules/sidebar-menu-compostrap/dist/css/sidebar.menu.css',
                        'node_modules/sidebar-menu-2-compostrap/dist/css/sidebar.custom.css',
                    ],
                    'www/css/user.logged.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                        'node_modules/sidebar-skeleton-compostrap/dist/css/sidebar.css',
                        'node_modules/@fortawesome/fontawesome-free/css/all.css',
                        'node_modules/user-logged-compostrap/dist/css/user.logged.css',
                    ],
                    'www/css/dashboard.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                        'node_modules/sidebar-skeleton-compostrap/dist/css/sidebar.css',
                        'node_modules/open-sans-fontface/open-sans.css',
                        'node_modules/@fortawesome/fontawesome-free/css/all.css',
                        'node_modules/perfect-scrollbar/css/perfect-scrollbar.css',
                        'node_modules/sidebar-menu-2-compostrap/dist/css/sidebar.custom.css',
                        'node_modules/user-logged-compostrap/dist/css/user.logged.css',
                        'node_modules/dashboard-skeleton-compostrap/dist/css/dashbaord.css',
                    ],
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
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: ['node_modules/user-logged-compostrap/dist/img/**'],
                        dest: 'www/img/',
                        filter: 'isFile'
                    },
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
                        'node_modules/bootstrap/dist/js/bootstrap.bundle.js',
                        'node_modules/sidebar-skeleton-compostrap/dist/js/sidebar.js',
                    ],
                    'www/js/sidebar.menu.min.js': [
                        'node_modules/sidebar-menu-compostrap/dist/js/sidebar.menu.js',
                        'node_modules/perfect-scrollbar/dist/perfect-scrollbar.js',
                        'node_modules/nanobar/nanobar.js',
                    ],
                }
            }
        }
    });

    // grunt tasks
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('grunt-run', ['cssmin', 'uglify', 'copy']);
};
