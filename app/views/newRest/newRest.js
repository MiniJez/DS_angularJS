'use strict';

angular.module('myApp.newRest', ['ngRoute', 'myApp.services'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/newRest', {
            templateUrl: 'views/newRest/newRest.html',
            controller: 'newRestCtrl'
        });
    }])

    .controller('newRestCtrl', ['$scope', 'dataStorage', '$location', function ($scope, dataStorage, $location) {
        $scope.valider = () => {
            dataStorage.add($scope.restaurant);
            $location.path("!#");
        }

        $scope.annuler = () => {
            $location.path("!#");
        }
    }]);