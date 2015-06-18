'use strict';

angular.module('myApp.euroleague', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/euroleague', {
    templateUrl: 'euroleague/euroleague.html',
    controller: 'euroleagueCtrl'
  });
}])
.controller('euroleagueCtrl', function($scope) {
})
