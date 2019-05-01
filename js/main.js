(function () {
  'use strict';

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
           $scope.sEspecialidade =  ["CLÍNICA MÉDICA", "CIRURGIA GERAL", "Cardiologia"];
           $scope.sFilial = ["São Paulo", "Salvador"];
           $scope.sCurso = ["2008 MEDCURSO Salvador TURMA A/2008 MED Salvador ", "2008 MEDCURSO SÃO PAULO TURMA A/2008 MED SÃO PAULO "];
         
           
           });
       
   };
   $scope.pesquisar = false;
   

   
    
   
  
});

app.filter('capitalize', function() {
  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }
});


})();