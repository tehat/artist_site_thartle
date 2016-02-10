/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {
    console.log("Home Controller");

    $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.slides = [];

    $http.get('/home').then(function (data) {

        $scope.slides = data.data.rows;
        console.log('object', $scope.slides);

    });

}]);










