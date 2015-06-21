'use strict';

angular.module('myApp.home', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])
.controller('homeCtrl', function($scope) {

  $scope.login="";
  $scope.password="";
  $scope.email="";
  $scope.favPage="";

  $scope.hasSignedUp=false;

  $scope.signUp = function(){
    $http.get('/signUp?login='+$scope.login+'&password='+$scope.password+'&email='+$scope.email+'&favPage'+$scope.favPage)
     .success(function(res){
       $scope.hasSignedUp=true;
     });
  }

});
