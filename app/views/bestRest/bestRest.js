'use strict';

angular.module('myApp.bestRest', ['ngRoute', 'myApp.services'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bestRest', {
    templateUrl: 'views/bestRest/bestRest.html',
    controller: 'bestRestCtrl'
  });
}])

.controller('bestRestCtrl', ['$scope', 'dataStorage', function($scope, dataStorage) {
  $scope.restaurant = dataStorage.get()
  let max = {}
  max.note = 0
  let resto = []

  for(let i = 0; i < 2; i++) {
    console.log($scope.restaurant)
    $scope.restaurant.forEach(elem => {
      if(elem.note > max.note){
        max = elem
      }
    })
    resto.push(angular.copy(max))
    $scope.restaurant.splice( $scope.restaurant.indexOf(max), 1 );
    max.note = 0
  }

  $scope.resto = resto
}]);