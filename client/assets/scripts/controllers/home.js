/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller('HomeController', ['$scope', '$http', function($scope, $http) {
    console.log("Home Controller");

    //$scope.slide = {image: $scope.dataRows.image_url};
    //var slides = $scope.dataRows = [];
    $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    var slides = $scope.slides = [];

    $http.get('/home').then(function (data) {

        $scope.slides = data.data.rows;
        console.log('object', $scope.slides);

    });

}]);


//


//myApp.animation('.slide-animation', function () {
//    return {
//        beforeAddClass: function (element, className, done) {
//            var scope = element.scope();
//
//            if (className == 'ng-hide') {
//                var finishPoint = element.parent().width();
//                if(scope.direction !== 'right') {
//                    finishPoint = -finishPoint;
//                }
//                TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
//            }
//            else {
//                done();
//            }
//        },
//        removeClass: function (element, className, done) {
//            var scope = element.scope();
//
//            if (className == 'ng-hide') {
//                element.removeClass('ng-hide');
//
//                var startPoint = element.parent().width();
//                if(scope.direction === 'right') {
//                    startPoint = -startPoint;
//                }
//
//                TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
//            }
//            else {
//                done();
//            }
//        }
//    };
//});



//[
//
//    {
//        image_url: "https://dl.dropboxusercontent.com/s/zg7py0ci2zwctj5/singedlandscape1998.jpg?dl=0"
//    },
//    {
//        image_url: "https://dl.dropboxusercontent.com/s/1tn21fz1m9ax9sa/scamperingsled.jpg?dl=0"
//    },
//    {
//        image_url: "https://dl.dropboxusercontent.com/s/3ex025kgqx2gi8z/potsdamsculpture2.jpg?dl=0"
//    },
//    {
//        image_url: "https://dl.dropboxusercontent.com/s/9ebcs2564psrhzp/brainspace.jpg?dl=0"
//    },
//    {
//        image_url: "https://dl.dropboxusercontent.com/s/m9euh3abqffkw71/howtokeepthingsliving.jpg?dl=0"
//    }
//
//];



