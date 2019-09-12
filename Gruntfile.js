module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // css minify
        cssmin: {
            target: {
                files: [{
                    'www/css/main.min.css': [
                        'node_modules/bootstrap/dist/css/bootstrap.css',
                        'node_modules/sidebar-skeleton-compostrap/dist/css/sidebar.css',
                    ]
                }]
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
                        'node_modules/sidebar-skeleton-compostrap/dist/js/sidebar.menu.js',
                    ]
                }
            }
        }
    });

    // grunt tasks
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('grunt-run', ['cssmin', 'uglify']);
};