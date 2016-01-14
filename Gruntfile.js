/**
 * Created by Thomas on 11/22/15.
 */
module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options:{
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:{
                src: 'client/assets/scripts/app.js',
                "dest": 'server/public/assets/scripts/app.min.js'
            },
            controllers: {
                src: 'client/assets/scripts/controllers/*.js',
                "dest": "server/public/assets/scripts/controllers/controller.min.js"
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules/angular/',
                src: [
                    'angular.min.js',
                    'angular.min.js.map',
                    'angular-csp.css'
                ],
                "dest": 'server/public/vendors/angular'
            },
            angularAnimate: {
                expand: true,
                cwd: 'node_modules/angular-animate/',
                src: [
                    "angular-animate.min.js",
                    "angular-animate.min.js.map"
                ],
                "dest": 'server/public/vendors/angular-animate/'
            },
            angularAria: {
                expand: true,
                cwd: 'node_modules/angular-aria/',
                src: [
                    'angular-aria.min.js',
                    'angular-aria.min.js.map'
                ],
                "dest": 'server/public/vendors/angular-aria/'
            },
            angularMessages: {
                expand: true,
                cwd: 'node_modules/angular-messages/',
                src: [
                    'angular-messages.min.js',
                    'angular-messages.min.js.map'
                ],
                "dest": 'server/public/vendors/angular-messages/'
            },
            angularRoute: {
                expand: true,
                cwd: 'node_modules/angular-route/',
                src: [
                    "angular-route.min.js",
                    "angular-route.min.js.map"
                ],
                "dest": 'server/public/vendors/angular-route/'

            },
            angularCarousel: {
                expand: true,
                cwd: 'node_modules/angular-carousel',
                src: [
                    "angular-carousel.min.js"
                ],
                "dest": 'server/public/vendors/angular-carousel'
            },
            angularBootstrap: {
                expand: true,
                    cwd: 'node_modules/angular-ui-bootstrap/',
                 src: [
                    "ui-bootstrap.min.js"
                 ],
                "dest": 'server/public/vendors/ui-bootstrap/'
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css/',
                src: [
                    "bootstrap.min.css",
                    "bootstrap.min.css.map"
                ],
                "dest": 'server/public/vendors/bootstrap/'
            },
            html: {
                expand: true,
                cwd: "client/assets/views/",
                src: "index.html",
                "dest": "server/public/assets/views/"
            },
            htmlRoutes: {
                expand: true,
                cwd: "client/assets/views/routes/",
                src: [
                    "archive.html",
                    "contact.html",
                    "current.html",
                    "home.html",
                    "mailing.html"
                ],
                "dest": "server/public/assets/views/routes/"
            },
            htmlTemplates: {
                expand: true,
                cwd: "client/assets/views/templates/",
                src: [
                    "header.html",
                    "main_nav.html",
                    "footer.html",
                    "slide.html",
                    "carousel.html",
                    "archive_nav.html",
                    "dropdown.html",
                    "current_nav.html"
                ],
                "dest": "server/public/assets/views/templates/"
            },
            styles: {
                expand: true,
                cwd: "client/assets/styles",
                src: ['style.css'],
                "dest": "server/public/assets/styles"
            },
            fonts: {
                expand: true,
                cwd: "node_modules/bootstrap/fonts/",
                src: ['glyphicons-halflings-regular.woff2',
                'glyphicons-halflings-regular.woff',
                'glyphicons-halflings-regular.ttf '],
                "dest": "server/public/vendors/fonts"
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};