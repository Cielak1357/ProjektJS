'use strict';

angular.module('myApp.bundesliga', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bundesliga', {
    templateUrl: 'bundesliga/bundesliga.html',
    controller: 'bundesligaCtrl'
  });
}])
.controller('bundesligaCtrl', function($scope) {
})
