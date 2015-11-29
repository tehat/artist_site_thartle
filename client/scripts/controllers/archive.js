/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller('ArchiveController', ['$scope','$location', function($scope, $location){

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.url('/archive');
    };


}]);




//myApp.controller("IndexController", ['scope','http', function($scope, $http ){
//    console.log("Boom IndexControler");
//
//$scope.artpiece = {};
//$scope.artcollection = [];
//
//var fetchArtPiece = function(){
//    return $http.get('/artcollection').then(function(response){
//        if(response.status !==200){
//            throw new Error('Failed to fetch artcollection from API');
//        }
//        $scope.artpiece = {};
//        $scope.artcollection = response.data;
//        return response.data;
//    })
//};
//$scope.add = function(artpiece){
//    return $http.post('add', artpiece).then(fetchArtPiece);
//};
//$scope.fetchArtPiece();
//}]);