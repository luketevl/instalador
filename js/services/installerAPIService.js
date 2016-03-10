// Criando Serviço de Comunicação com o Instalador
angular.module('gerenciadorErp').factory('installerAPI', function($http, config){

  /**
    * Verifica se pasta existe
    * @author lukete
    * @param pasta Nome da Pasta
    * @since 09/03/16
    * @return $http response
  **/
  var _pastaExiste = function(pasta){
    pasta  = {
      'pasta': pasta
    };
    return $http.get(config.INSTALLER_URL + "clientes_rest/pasta_existe/", pasta);
  };
  return{
    pastaExiste: _pastaExiste,
  }
});
