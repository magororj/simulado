
/**
 * Main
 */
var app = angular.module('simulado', [
  'ngRoute'
]);

/**
 * Rotas
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "templates/home.html", controller: "PageCtrl"});
}]);


/**
 * Controls all other Pages
 */
app.controller('cursosMed', function($rootScope, $location, $scope, $http, $filter){
  $rootScope.activetab = $location.path("/simulado");
  $rootScope.titulo = "Relatório de Cadastros Concluídos";
  $rootScope.fluid = "-fluid";
   
   $scope.hideLogin = false;
   $scope.hideRj = false;
   $scope.hideSp = false;
   $scope.hideDf = false;
   $scope.propertyName = 'nomeCompleto';
   $scope.reverse = false;
   
   
  //pegar os dados estatísticos ;
   $scope.getCadastrados = function(){
   
       
           $http({
               method: 'POST',
               url: '/lista.json',
               data : {tipo:"cadastro"}
           }).then(function successCallback(respons){
              if(respons.data){ 
              
              $scope.cadastros = respons.data;
              $scope.cadastrados = true;
           
           }
              
           
           });
       
   };
   
   //filter
  
   
   $scope.sortBy = function(propertyName) {
     $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
     $scope.propertyName = propertyName;
   };
   
  
   $scope.getCadastrados();
  
});
app.directive('lightboxDirective', function() {
  return {
    restrict: 'E', // applied on 'element'
    transclude: true, // re-use the inner HTML of the directive
    template: '<section ng-transclude></section>', // need this so that inner HTML will be used
  }
})

angular.bootstrap(document, ['app']); // manually run the Angular app