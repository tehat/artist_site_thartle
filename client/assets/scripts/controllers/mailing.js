/**
 * Created by Thomas on 11/23/15.
 */
myApp.controller("MailingController", ['$scope','$http', function($scope, $http){
    console.log("Mailing Controller");



    //POST send object with  entered mailing list info
    $scope.clickButton = function(request){

        $http.post('/mailing', request).then(function(){
            console.log("button click: ",request.body);
        });
        $scope.form = {};
    };

}]);