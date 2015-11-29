/**
 * Created by Thomas on 11/22/15.
 */
var myApp = angular.module('myApp', ['ngRoute']);




myApp.config(['$routeProvider', function($routeProvider, $locationProvider){
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



//angular.module('myApp')
//    .directive('bsActiveLink', ['$location', function ($location) {
//        return {
//            restrict: 'A', //use as attribute
//            replace: false,
//            link: function (scope, elem) {
//                //after the route has changed
//                scope.$on("$routeChangeSuccess", function () {
//                    var hrefs = ['/#' + $location.path(),
//                        '#' + $location.path(), //html5: false
//                        $location.path()]; //html5: true
//                    angular.forEach(elem.find('a'), function (a) {
//                        a = angular.element(a);
//                        if (-1 !== hrefs.indexOf(a.attr('href'))) {
//                            a.parent().addClass('active');
//                        } else {
//                            a.parent().removeClass('active');
//                        };
//                    });
//                });
//            }
//        }
//    }]);


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