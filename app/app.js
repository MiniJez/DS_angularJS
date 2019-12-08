'use strict';

angular.module('myApp', ['ngRoute', 'myApp.bestRest', 'myApp.accueil', 'myApp.details', 'myApp.newRest', 'myApp.services', "myApp.directives"])
  .controller('MainController', ['$scope', 'dataFetcher', 'dataStorage', async function ($scope, dataFetcher, dataStorage) {
    dataFetcher.init().then((res) => {
      $scope.restaurants = res
      $scope.selected = 0
      dataStorage.set(res)
    })
  }])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/accueil'})
    $routeProvider.when('/bestRest', {
      templateUrl: 'views/bestRest/bestRest.html',
      controller: 'bestRestCtrl'
    })
    $routeProvider.when('/details/:index', {
      templateUrl: 'views/details/details.html',
      controller: 'detailsCtrl'
    })
    $routeProvider.when('/newRest', {
      templateUrl: 'views/newRest/newRest.html',
      controller: 'newRestCtrl'
    })
  }])
