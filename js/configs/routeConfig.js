angular.module('gerenciadorErp').config(function($routeProvider){

  // ROTA PRINCIPAL
  $routeProvider.when('/principal', {
    templateUrl: 'views/principal.html',
    controller: 'principalController',
  });


  // ROTA PADRAO para quando nao existir nenhuma
  $routeProvider.otherwise({redirectTo: '/principal'});

});
