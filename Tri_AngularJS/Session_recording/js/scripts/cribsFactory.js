angular.module('ngCribs')
.factory('cribsFactory', function($http){

    
    
    function getCribs() {
        return $http.get('js/data/data01.json');
    }
    
    return {
        getCribs : getCribs
    }
})