'use strict'
var myModule = angular.module('myApp.directives');
myModule.directive('inforestaurants', ['dataStorage', function (dataStorage) {

    return {
        templateUrl: '/directives/infoRestaurants/infoRestaurants.html',
        scope: {
            restaurants: "=",
            selected: "="
        },
        link: (scope) => {
            if(scope.restaurants === undefined) {
                scope.restaurants = dataStorage.get()
            }

            scope.$watch(() => scope.selected, () => {
                scope.restaurant = angular.copy(scope.restaurants[scope.selected])
                scope.formrestaurant.$setPristine();
            })

            scope.valider = () => {
                angular.copy(scope.restaurant, scope.restaurants[scope.selected])
                dataStorage.set(scope.restaurants)
            }

            scope.annuler = () => {
                scope.restaurant = angular.copy(scope.restaurants[scope.selected])
                scope.formrestaurant.$setPristine();
            }

            scope.supprimer = () => {
                scope.restaurants = dataStorage.del(scope.restaurants[scope.selected])
                scope.selected = 0
                scope.restaurant = scope.restaurants[scope.selected]
                scope.formrestaurant.$setPristine();
            }
        }
    };
}]);