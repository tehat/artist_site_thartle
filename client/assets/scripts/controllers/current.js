/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller("CurrentController", ['$scope','$http', function($scope, $http, $log ){
    console.log("CurrentController");

    $scope.currentwork = {};
    $scope.currentCollection = [];


    //GET  display artwork on DOM
    $scope.getArt = function(request){

        console.log("is this working Current?");      // add var id to the get ajax call
         $http({
             url: '/current',
             method: "GET",
             params: {
                 id: request
             }
         }).then(function(response) {
            $scope.currentwork = response.data;
             console.log($scope.currentwork);
            $scope.currentCollection.response.data;
                console.log($scope.currentCollection);
                console.log(reponse.data);
        });
    };

}]);




//title: $scope.currentwork.title,
//date_completed: $scope.currentwork.date_completed,
//materials: $scope.currentwork.materials,
//dimensions: $scope.currentwork.dimensions,
//image_url: $scope.currentwork.image_url