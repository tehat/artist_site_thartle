/**
 * Created by Thomas on 2/9/16.
 */
myApp.controller('ArchiveController', ['$scope', '$http', function($scope, $http) {
    console.log("Archive Controller");

    //$scope.slide = {image: $scope.dataRows.image_url};
    //var slides = $scope.dataRows = [];
    $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.slides = [];
    $scope.sculpture = [];
    $scope.paintings = [];
    $scope.worksonpaper = [];
    $scope.installations = [];
    $scope.furniture = [];

    $http.get('/').then(function (data) {

        $scope.slides = data.data.rows;
        console.log('object', $scope.slides);

    });


    $http.get('/archive/sculpture').then(function (data) {

        $scope.sculpture = data.data.rows;
        console.log('sculpture object', $scope.sculpture);

    });


    $http.get('/archive/paintings').then(function (data) {

        $scope.paintings = data.data.rows;
        console.log('object', $scope.paintings);

    });


    $http.get('/archive/worksonpaper').then(function (data) {

        $scope.worksonpaper = data.data.rows;
        console.log('object', $scope.worksonpaper);

    });


    $http.get('/archive/installations').then(function (data) {

        $scope.installations = data.data.rows;
        console.log('object', $scope.installations);

    });


    $http.get('archive/furniture').then(function (data) {

        $scope.furniture = data.data.rows;
        console.log('object', $scope.furniture);

    });

}]);