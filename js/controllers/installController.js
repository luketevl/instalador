// ERRO
angular.module("gerenciadorErp").controller("installCtrl", function($scope, installerAPI){
  installerAPI.pastaExiste('tagplus').then(function(data){
    console.log(data);
  }, function(error){
    console.log(error);
  });
});
