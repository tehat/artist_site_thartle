/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller('CurrentController', ['$scope', function($scope){

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.url('/current');
    };


}]);