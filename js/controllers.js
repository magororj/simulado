//Controller



app.controller('GeralCtrl', function($rootScope, $location, $scope, $http){
    
   $rootScope.activetab = $location.path();
   $rootScope.titulo = "Andamento do Cadastro";
    $rootScope.fluid = " ";
   
    
});

app.controller('ConsolidadoCtrl', function($rootScope, $location, $scope, $http, $filter){
   $rootScope.activetab = $location.path();
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
                url: '../relatorio.php',
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
