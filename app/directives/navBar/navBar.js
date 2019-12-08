'use strict'
'use strict'
var myModule = angular.module('myApp.directives');
myModule.directive('navbar', [function () {

    return {
        templateUrl: '/directives/navBar/navBar.html',
        scope: {
        },
        link: (scope) => {
            
        }
    };
}]);