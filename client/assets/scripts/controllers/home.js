/**
 * Created by Thomas on 11/24/15.
 */
myApp.controller('HomeController', ['$scope', '$http', function($scope, $http){
    console.log("Home Controller");

    $scope.artwork = {};
    $scope.myInterval = 510000;
    $scope.noWrapSlides = false;

    var slides = $scope.slides = [];
    console.log(slides);

    //GET artwork
    $scope.getArt = function(){
        console.log("is this working 3?");

        $http.get('/home').then(function(response) {

                $scope.artwork = response.data;

                console.log( $scope.artwork);
                console.log(response.data);

        });
    };

    $scope.addSlide = function() {
        var newWidth = 800 + slides.length + 1;
        slides.push({
            image: '/home' + newWidth + '/800',
            text: ['Singed Landscape','Body Cast','Potsdam','Elephant Pouch', 'How To Keep Things Living']
                [slides.length % 5] + ' ' +
            ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 5]
        });
        $scope.getArt();
    };

    for (var i=0; i<5; i++) {
        $scope.addSlide();
    }

}]);

