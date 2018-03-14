angular
    .module('ngCribs')
.controller('cribsController', function($scope, cribsFactory){
 
    $scope.cribs;
    $scope.priceInfo = {
        min:0,
        max:1000000,
    }
    cribsFactory.getCribs().then(function(response){
        $scope.cribs = response.data;
    });
    
    $scope.sayHello = function(){
        console.log("hello");
    }
        
});