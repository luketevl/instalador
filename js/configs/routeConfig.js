angular.module('gerenciadorErp').config(function($routeProvider){

  // ROTA MEU PLANO
  $routeProvider.when('/meu_plano', {
    templateUrl: 'views/meu_plano.html',
    controller: 'principalController',
  });


  // ROTA PADRAO para quando nao existir nenhuma
  $routeProvider.otherwise({redirectTo: '/principal'});

});
