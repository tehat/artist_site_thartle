/**
 * Created by Thomas on 11/22/15.
 */
var myApp = angular.module('myApp', ["ngRoute", "ui.bootstrap"]);

console.log("route provider function");




myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.

    when('/home', {
        templateUrl: "/assets/views/routes/home.html",
        controller:"HomeController"
    }).
    when('/current', {
        templateUrl: "/assets/views/routes/current.html",
        controller:"CurrentController"
    }).
    when('/archive', {
        templateUrl: "/assets/views/routes/archive.html",
        controller:"ArchiveController"
    }).
    when('/mailing', {
        templateUrl: "/assets/views/routes/mailing.html",
        controller:"MailingController"
    }).
    when('/contact', {
        templateUrl: "/assets/views/routes/contact.html",
        controller:"ContactController"
    }).
    otherwise({
        redirectTo: 'home'
    });

}]);






//$locationProvider.
//
//hashPrefix('#home', {
//    templateUrl: "/assets/views/routes/home.html",
//    controller:"HomeController"
//}).
//hashPrefix('#current', {
//    templateUrl: "/assets/views/routes/home.html",
//    controller:"CurrentController"
//}).
//hashPrefix('#archive', {
//    templateUrl: "/assets/views/routes/home.html",
//    controller:"ArchiveController"
//}).
//hashPrefix('#mailing', {
//    templateUrl: "/assets/views/routes/home.html",
//    controller:"MailingController"
//}).
//hashPrefix('#contact', {
//    templateUrl: "/assets/views/routes/home.html",
//    controller:"ContactController"
//}).
//otherwise({
//    redirectTo: 'home'
//})