/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller("CurrentController", ['$scope','$http', function($scope, $http){
    console.log("CurrentController");

    $scope.currentwork = {};
    $scope.currentCollection = [];


    //GET  display artwork on DOM
    $scope.getArt = function(id){

        console.log("is this working Current?");      // add var id to the get ajax call
         $http({
             url: '/',
             method: "GET",
             params: {
                 id: id
             }
         }).then(function(request) {
           //$scope.currentwork = request.data;
             console.log($scope.currentwork);
                $scope.currentCollection = request.data;
                console.log($scope.currentCollection);
                console.log(reponse.data);
        });
    };

}]);




//title: $scope.currentwork.title,
//date_completed: $scope.currentwork.date_completed,
//materials: $scope.currentwork.materials,doo
//dimensions: $scope.currentwork.dimensions,
//image_url: $scope.currentwork.image_url