/**
 * Created by Thomas on 12/3/15.
 */
var myApp = angular.module('myApp',['ui.bootstrap']);

myApp.controller('DropdownController', function ($scope, $log) {
    $scope.items = [
        '# First Image',
        '# Second Image',
        '# Third Image'
    ];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
});