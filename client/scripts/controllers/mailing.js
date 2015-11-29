/**
 * Created by Thomas on 11/23/15.
 */

myApp.controller("MailingController", ['$scope','$http', function($scope, $http){
    console.log("Mailing Controller");

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.url('mailing');
    };


    $scope.person = {};
    $scope.mailingList = [];


    //POST
    $scope.clickButton = function(request,response){

        $http.post('/mailing', request).then(function(response){
            console.log("button click",request.body);
        });
        $scope.form = {};
    };

}]);