/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller("ArchiveController", ['$scope','$http', function($scope, $http ){
    console.log("ArchiveController");

    $scope.dataRows = [];

    $scope.clickButton = function(request) {
        console.log("button click", request);
    };

    $http.post('/archive').then(function (data) {

        $scope.dataRows = data.data.rows;
        console.log('object', $scope.dataRows);

    });


}]);









