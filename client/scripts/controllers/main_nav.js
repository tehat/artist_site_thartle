/**
 * Created by Thomas on 11/27/15.
 */
myApp.controller('MainNavigation', ['$scope', '$location', function($scope, $location) {

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.url('/');
    };

}]);





//console.log(" Main Navigation");
//$scope.isActive = function(path){
//    $location.path('/home.html');
//    $location.path('/current.html');
//    $location.path('/archive.html');
//    $location.path('/mailing.html');
//    $location.path('contact.html');