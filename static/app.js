'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.nba',
  'myApp.euroleague',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('loginCtrl', function($scope, $http) {

  $scope.login = "";
  $scope.password = "";
  $scope.isFormVisible = true;

  $scope.editLogin = "";
  $scope.editPassword = "";


  $scope.signIn = function() {
  $scope.login = $scope.editLogin;
  $scope.password = $scope.editPassword;
  $http.get('/checkUser?login='+$scope.login+'&password='+$scope.password)
   .success(function(res){
     if(res.Ans == 'OK'){
       $scope.isFormVisible = false;
       $scope.editLogin = "";
       $scope.editPassword = "";
     }
     else
       alert("Złe hasło lub login")
   });
  }

  $scope.signOut = function() {
  $http.get('/signOut')
   .success(function(res){
       $scope.login = "";
       $scope.password = "";
       $scope.isFormVisible = true;
   });
  }

  $scope.checkUser = function() {
  $http.get('/checkUser?login='+$scope.login+'&password='+$scope.password)
  if(res.Ans == 'OK'){}
  else{}
  }
});
