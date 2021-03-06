'use strict'
var myModule = angular.module('myApp.directives');
myModule.directive('detailsrestaurant', ['dataStorage', '$location', function (dataStorage, $location) {

    return {
        templateUrl: '/directives/detailsRestaurant/detailRestaurant.html',
        scope: {
            restaurants: "=",
            selected: "="
        },
        link: (scope) => {
            scope.$watch(() => scope.selected, () => {
                scope.restaurant = angular.copy(scope.restaurants[scope.selected])
                scope.formrestaurant.$setPristine();
            })

            scope.valider = () => {
                angular.copy(scope.restaurant, scope.restaurants[scope.selected])
                dataStorage.set(scope.restaurants)
                $location.path("!#");
            }

            scope.annuler = () => {
                scope.restaurant = angular.copy(scope.restaurants[scope.selected])
                scope.formrestaurant.$setPristine();
                $location.path("!#");
            }
        }
    };
}]);