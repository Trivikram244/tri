angular.module('ngCribs')
    .filter('cribsFilter',function(){
   
    
    return function(listings, priceInfo){
        var filtered = [];
        
        var min = priceInfo.min;
        var max = priceInfo.max;
        
        angular.forEach(listings, function(listings){
            if(listings.price >= min && listings.price <= max){
               
                filtered.push(listings);
                
               }
        });
        
        return filtered;
        
    }
});