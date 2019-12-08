function Service() {
    let savedData

    function set(data) {
        savedData = data
    }

    function get() {
        console.log(savedData)
        return angular.copy(savedData);
    }

    function del(data) {
        var removeIndex = savedData.map(function(item) { return item.nom; }).indexOf(data.nom);
        savedData.splice(removeIndex, 1)
        return get()
    }

    function add(data) {
        savedData.push(data)
    }

    return {
        set: set,
        get: get,
        del: del,
        add: add
    };
}

var module = angular.module('myApp.services');
module.factory('dataStorage', Service)