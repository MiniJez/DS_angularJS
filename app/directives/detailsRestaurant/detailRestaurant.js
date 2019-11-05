'use strict'
var myModule = angular.module('myApp');
myModule.directive('detailsrestaurant', [function () {

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
                console.log(scope.restaurant.commentaire, scope.restaurants[scope.selected].commentaire)
                angular.copy(scope.restaurant, scope.restaurants[scope.selected])
            }

            scope.annuler = () => {
                scope.restaurant = angular.copy(scope.restaurants[scope.selected])
                scope.formrestaurant.$setPristine();
            }
        }
    };
}]);