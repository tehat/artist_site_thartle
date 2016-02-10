/**
 * Created by Thomas on 1/6/16.
 */
myApp.controller('DropdownCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
    $scope.items = [];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };


    $scope.rows = {
        slides: []
    };

    $scope.clickButton = function(request) {
        console.log("button click", request);

        $http.get('/archive').then(function (request) {

            $scope.slides = data.data.rows;
            console.log('object', $scope.slides);

        });
    };

}]);

//$http({
//    method: 'GET',
//    url: '/archive'
//}).then(function(request) {
//    $scope.dataRows = request.data;
//    //$scope.dataRows = data.data.rows;
//    console.log('object', $scope.dataRows);
//});