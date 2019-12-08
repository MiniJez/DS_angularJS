'use strict';

angular.module('myApp.details', ['ngRoute', 'myApp.services'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/details', {
            templateUrl: 'views/details/details.html',
            controller: 'bestRestCtrl'
        });
    }])

    .controller('detailsCtrl', ['$scope', 'dataStorage', '$routeParams', function ($scope, dataStorage, $routeParams) {
        $scope.restaurants = dataStorage.get()
        $scope.selected = $routeParams.index
    }]);