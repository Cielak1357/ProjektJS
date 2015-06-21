'use strict';

angular.module('myApp.premierLeague', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/premierLeague', {
    templateUrl: 'premierLeague/premierLeague.html',
    controller: 'premierLeagueCtrl'
  });
}])
.controller('premierLeagueCtrl', function($scope) {
})
