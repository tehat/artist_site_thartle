/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller('ContactController', ['$scope', function($scope){

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.url('/contact');
    };


}]);