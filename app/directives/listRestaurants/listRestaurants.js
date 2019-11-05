'use strict'
var myModule = angular.module('myApp');
myModule.directive('listrestaurants', [function () {

    return {
        templateUrl: '/directives/listRestaurants/listRestaurants.html',
        scope: {
            restaurants: "=",
            selected: "="
        },
        link: (scope) => {
            scope.currentRestaurant = (index) => {
                if(index == scope.selected) {
                    return 'btn-primary'
                }
            }

            scope.changeSelectedItem = (index) => {
                scope.selected = index
            }
        }

    };
}]);