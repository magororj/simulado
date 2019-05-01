(function () {
  'use strict';

var app = angular.module('simulado', [
  'ngRoute'
]);

app.controller('cursosMed', function( $scope, $http){
   
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
   

   $scope.modalShown = false;
    $scope.toggleModal = function() {
    $scope.modalShown = !$scope.modalShown;
  };
    
   $scope.Fonte = function(x){
    
    $scope.txt = document.getElementById("container");
    $scope.style = window.getComputedStyle($scope.txt, null).getPropertyValue('font-size');
    $scope.currentSize = parseFloat($scope.style);
    $scope.txt.style.fontSize = ($scope.currentSize + x) + 'px';
   }
   
});

app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: `<div class='ng-modal' ng-show='show'>
                  <div class='ng-modal-overlay' ng-click='hideModal()'></div>
                  
                  <div class='modal-dialog ng-modal-dialog' ng-style='dialogStyle'>
                    
                    <div class="modal-header">
                    <h5 class="modal-title">Envie para um amigo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                    <div class='ng-modal-dialog-content' ng-transclude>
                    <div class="modal-content">
                        
                        <div class="modal-body">
                          <h2>Code is beautiful!</h2>
                          <p class="text-center"><img class="w-75 h-auto" src="http://t0.gstatic.com/images?q=tbn:ANd9GcQnqM9EsuoREDe_pvH_paYdh7gYYiGH0S9yBnURQ4rZ2foHk_A4"></p>
                        </div>
                        
                      </div>
                    
                    </div>
                    
                  </div>
                </div>`
  };
});

app.filter('capitalize', function() {
  return function(input) {
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }
});


})();