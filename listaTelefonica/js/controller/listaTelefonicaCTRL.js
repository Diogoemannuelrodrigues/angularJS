angular.module("listaTelefonica").controller("listaTelefonicaCtrl",
    function($scope, $http, serialGenerateService) {
        console.log(serialGenerateService.generate());
        $scope.app = "Lista Telefonica";
        $scope.contatos = [{
            nome: "Pedro Campos",
            telefone: "99999-5252",
            cor: "aqua"
        }, {
            nome: "Ana Claudia",
            telefone: "99569-5252",
            cor: "yellow"
        }, {
            nome: "Jeane Linda",
            telefone: "99129-5252",
            cor: "green"
        }, {
            nome: "Maria Júlia",
            telefone: "99934-5252",
            cor: "red"
        }]

        /*     $scope.cores = [
            {nome: "blue"},
            {nome: "yelllow"},
            {nome: "green"},
            {nome: "red"}
        ] 
 */

        /*     var carregaContatosDoBackEnd = function() {
                $http.get("Uma URL").sucess(function(data, status) {
                    $scope.contatos = data;
                });
            } */
        $scope.operadoras = [{
                nome: "OI",
                codigo: 14
            }, {
                nome: "CLARO",
                codigo: 61
            }, {
                nome: "TIM",
                codigo: 41
            }, {
                nome: "VIVO",
                codigo: 51
            }

        ];

        $scope.salvar = function(contato) {
            contato.serial = serialGenerateService.generate();
            $scope.contatos.push(angular.copy(contato));
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
        }

        $scope.delete = function(contato) {
            $scope.contatos.delete
        }

        $scope.delete = function(contatos) {
            $scope.contatos = contatos.filter(function(contato) {
                if (!contato.selecionado) return contato;
            });
        };

        $scope.isContatoSelecionado = function(contatos) {
            return contatos.some(function(contato) {
                return contato.selecionado;
            });
            console.log(isContatoSelecionado);
        };

    });