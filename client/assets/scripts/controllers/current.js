/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller("CurrentController", ['$scope','$http', function($scope, $http){
    console.log("CurrentController");

    $scope.dataRows = [];

    $scope.clickButton = function(request) {
        console.log("button click", request);
    };

    $http.post('/current').then(function (data) {

        $scope.dataRows = data.data.rows;
        console.log('object', $scope.dataRows);

    });

}]);




//$scope.currentwork = {};
//$scope.currentCollection = [];
//
//
////GET  display artwork on DOM
//$scope.getArt = function(id){
//
//    console.log("is this working Current?");      // add var id to the get ajax call
//     $http({
//         url: '/',
//         method: "GET",
//         params: 'id'
//
//     }).then(function(request) {
//       //$scope.currentwork = request.data;
//         console.log($scope.currentwork);
//            $scope.currentCollection = request.data;
//            console.log($scope.currentCollection);
//            console.log(reponse.data);
//    });
//};