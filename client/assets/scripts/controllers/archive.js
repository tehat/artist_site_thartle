/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller("ArchiveController", ['$scope','$http', function($scope, $http ){
    console.log("ArchiveController");

    $scope.artwork = {};
    $scope.artCollection = [];

    //GET artwork
    $scope.getArt = function(){
        console.log("is this working 3?");

        $http.get('/archive').then(function(response) {

            for(var i = 0; i < $scope.artCollection.length; i++){
                var artwork = $scope.artCollection[i];
            $scope.artCollection.push(response.data[0]);
            console.log( $scope.artCollection);
                console.log(response.data);
            }

        });
    };
    $scope.getArt();

}]);









