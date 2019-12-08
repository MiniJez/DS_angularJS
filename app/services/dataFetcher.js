function Service($q) {

    function init() {
        var defer = $q.defer();
        fetch('../data/restaurants.json', { method: "GET" }).then((val) => {
            val.json().then((res) => {
                defer.resolve(res)
            })
        })

        return defer.promise;
    }

    return {
        init: init
    };
}

var module = angular.module('myApp.services');
module.factory('dataFetcher', Service)