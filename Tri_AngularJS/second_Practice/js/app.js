var app = angular.module('mainApp', ['ngRoute']);


app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'js/components/login.html',
      controller:'homeCtrl'
    })
    .when('/home', {
      templateUrl:'js/components/home.html',
      controller:'homeCtrl'
    }).when('/women', {
      templateUrl:'js/components/women.html',
      controller:'womenCtrl'
    })
    .when('/men', {
      templateUrl:'js/components/men.html',
      controller:'menCtrl'
    }).otherwise({
      redirectTo:'/'
    })
});


app.controller('myCtrl', function($scope, $http,){

    $http.get('js/data/data.JSON').then(function(responce){

        $scope.products = responce.data;

    });

});

app.controller('womenCtrl', function($scope, $http,){

    $http.get('js/data/data.JSON').then(function(responce){

        $scope.products = responce.data.women;

    });

});
app.controller('menCtrl', function($scope, $http,){

    $http.get('js/data/data.JSON').then(function(responce){

        $scope.menProducts = responce.data.men;

    });

});
app.controller('homeCtrl', function($scope){



});
