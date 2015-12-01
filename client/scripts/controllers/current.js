/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller("CurrentController", ['$scope','$http', function($scope, $http ){
    console.log("CurrentController");

    $scope.currentwork = {};
    $scope.currentCollection = [];

    //GET artwork
    $scope.getArt = function(){
        console.log("is this working Current?");

        $http.get('/current').then(function(response) {

            for(var i = 0; i < $scope.currentCollection.length; i++){
                var currentwork = $scope.currentCollection[i];
                $scope.currentwork = response.data;
                console.log(currentwork);
            }

        });
    };

    $scope.getArt();

}]);
