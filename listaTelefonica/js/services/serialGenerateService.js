angular.module("listaTelefonica").provider("serialGenerateService", function() {
    var _length = 10;
    this.$get = function() {

        return {
            generate: function() {
                var serial = "";
                while (serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 16) + 71);
                }
                return serial;
            }
        };
    }
});