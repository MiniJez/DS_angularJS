'use strict';

angular.module('myApp.accueil', ['ngRoute', 'myApp.services'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/accueil', {
      templateUrl: 'views/accueil/accueil.html',
      controller: 'accueilCtrl'
    });
  }])

  .controller('accueilCtrl', ['$scope', 'dataStorage', function ($scope, dataStorage) {
    $scope.restaurants = dataStorage.get()
    $scope.selected = 0
  }]);