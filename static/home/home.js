'use strict';

angular.module('myApp.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])
.controller('homeCtrl', function($scope, $http) {

  $scope.login="";
  $scope.password="";
  $scope.email="";
  $scope.favPage="";

  $scope.hasSignedUp=false;

  $scope.signUp = function(){
    if($scope.login != "" && $scope.password != "" && $scope.email != "" && $scope.favPage != "")
      $http.get('/signUp?login='+$scope.login+'&password='+$scope.password+'&email='+$scope.email+'&favPage='+$scope.favPage)
      .success(function(res){
        $scope.hasSignedUp=true;
      });
    else {
      alert("Wypełnij wszystkie pola!");
    }
  }

});
