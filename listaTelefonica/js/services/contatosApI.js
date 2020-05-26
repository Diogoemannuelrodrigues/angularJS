angular.module("listaTelefonica").factory("contatosAPI", function($http) {
    var _getContatos = function() {
        return $http.get("sua URL");
    }

    var _saveContatos = function() {
        return $http.post("sua URL");
    }

    return {
        getContatos: _getContatos,
        saveContatos: _saveContatos

    }

});