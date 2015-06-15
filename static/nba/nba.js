'use strict';

angular.module('myApp.nba', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/nba', {
    templateUrl: 'nba/nba.html',
    controller: 'nbaCtrl'
  });
}])
.controller('nbaCtrl', function($scope) {
})
