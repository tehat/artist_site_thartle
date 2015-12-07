/**
 * Created by Thomas on 11/22/15.
 */
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate']);


//myApp.controller('MainController', '$scope', '$route', '$routeParams', '$location',
//    function($scope, $route, $routeParams, $location){
//        $scope.$route = $route;
//        $scope.$location = $location;
//        $scope.$routeParams = $routeParams;
//});






myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: "assets/views/routes/home.html",
            controller: "HomeController"
        })
        .when('/current', {
            templateUrl: "/assets/views/routes/current.html",
            controller: "CurrentController"
        })
        .when('/archive', {
            templateUrl: "/assets/views/routes/archive.html",
            controller: "ArchiveController"
        })
        .when('/mailing', {
            templateUrl: "/assets/views/routes/mailing.html",
            controller: "MailingController"
        })
        .when('/contact', {
            templateUrl: "/assets/views/routes/contact.html",
            controller: "ContactController"
        })
        .otherwise({
            redirectTo: 'current'
        });
}]);