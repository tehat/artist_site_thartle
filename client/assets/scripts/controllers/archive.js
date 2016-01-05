/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller("ArchiveController", ['$scope','$http', function($scope, $http) {
    console.log("ArchiveController");

    $scope.rows = {
        dataRows: []
    };

    $scope.clickButton = function(request) {
        console.log("button click", request);
        $http({
            method: 'GET',
            url: '/archive'
        }).then(function(request) {
            $scope.dataRows = request.data;
            //$scope.dataRows = data.data.rows;
            console.log('object', $scope.dataRows);
            });
    };

}]);








