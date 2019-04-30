
/**
 * Main
 */
var app = angular.module('simulado', [
  'ngRoute'
]);

app.controller('cursosMed', function($rootScope, $location, $scope, $http, $filter){
   
   $scope.getCadastrados = function(){
   
       
           $http({
               method: 'POST',
               url: '../simulado_medgrupo/lista.json',
               data : {tipo:"cadastro"}
           }).then(function successCallback(respons){
              if(respons.data){ 
              
              $scope.cadastros = respons.data;
              
           
           }
              
           
           });
       
   };
   $scope.pesquisar = false;
   
  
   $scope.getCadastrados();
  
});

app.filter('capitalize', function() {
  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }
});
/* app.directive('lightboxDirective', function() {
  return {
    restrict: 'E', // applied on 'element'
    transclude: true, // re-use the inner HTML of the directive
    template: '<section ng-transclude></section>', // need this so that inner HTML will be used
  }
})

angular.bootstrap(document, ['app']); // manually run the Angular app */