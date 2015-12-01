/**
 * Created by Thomas on 11/22/15.
 */
module.exports = function(grunt){

    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        uglify:{
            option:{
                banner: '/*!<%=pkg.name%><%=grunt.template.today("yyyy-mm-dd")%>*/\n'
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
                cwd: 'node modules/angular/',
                src: [
                    'angular.min.js',
                    'angular.min.js.map',
                    'angular-csp.css'
                ],
                "dest": 'server/public/vendors/angular'
            },
            angularAnimate: {
                expand: true,
                cwd: 'node modules/angular-animate/',
                src: [
                    "angular-animate.min.js",
                    "angular-animate.min.js.map"
                ],
                "dest": 'server/public/vendors/angular-animate/'
            },
            angularRoute: {
                expand: true,
                cwd: 'node modules/angular-route/',
                src: [
                    "angular-route.min.js",
                    "angular-route.min.js.map"
                ],
                "dest": 'server/public/vendors/angular-route/'
            },
            bootstrap: {
                expand: true,
                cwd: 'node modules/bootstrap/',
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
                    "archive_nav.html",
                    "current_nav.html"
                ],
                "dest": "server/public/assets/views/templates/"
            },
            styles: {
                expand: true,
                cwd: "client/assets/styles",
                src: ['style.css'],
                "dest": "server/public/assets/styles"
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};