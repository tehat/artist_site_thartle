/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {
    console.log("Home Controller");

    //$scope.slide = {image: $scope.dataRows.image_url};
    $scope.dataRows = [];
    $scope.myInterval = 6000;
    $scope.noWrapSlides = false;

    $http.post('/home').then(function (data) {

        $scope.dataRows = data.data.rows;
        console.log('object', $scope.dataRows);

    });

    for(var i = 0; i < 5; i++) {
        $scope.dataRows = [i];
    }

}]);

//myApp.controller('HomeController', ['$scope', function ($scope) {
//    $scope.myInterval = 6000;
//    $scope.dataRows = [
//
//        {
//            image_url: "https://dl.dropboxusercontent.com/s/zg7py0ci2zwctj5/singedlandscape1998.jpg?dl=0"
//        },
//        {
//            image_url: "https://dl.dropboxusercontent.com/s/1tn21fz1m9ax9sa/scamperingsled.jpg?dl=0"
//        },
//        {
//            image_url: "https://dl.dropboxusercontent.com/s/3ex025kgqx2gi8z/potsdamsculpture2.jpg?dl=0"
//        },
//        {
//            image_url: "https://dl.dropboxusercontent.com/s/9ebcs2564psrhzp/brainspace.jpg?dl=0"
//        },
//        {
//            image_url: "https://dl.dropboxusercontent.com/s/m9euh3abqffkw71/howtokeepthingsliving.jpg?dl=0"
//        }
//
//    ];
//}]);








