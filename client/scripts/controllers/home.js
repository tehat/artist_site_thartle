/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller('HomeController', ['$scope', function($scope){
    //console.log("Home Controller");
    //$scope.thing = "Here is another thing";
    //function MainNavigation($scope, $location) {
    $scope.isActive = function(viewLocation){
        return viewLocation === $location.url('/home');


        function slideShowController($scope, $timeout) {
            var slidesInSlideshow = 4;
            var slidesTimeIntervalInMs = 3000;

            $scope.slideshow = 1;
            var slideTimer =
                $timeout(function interval() {
                    $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
                    slideTimer = $timeout(interval, slidesTimeIntervalInMs);
                }, slidesTimeIntervalInMs);
        }
    }

}]);

