'use strict';

angular.module('myApp.ligue1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ligue1', {
    templateUrl: 'ligue1/ligue1.html',
    controller: 'ligue1Ctrl'
  });
}])
.controller('ligue1Ctrl', function($scope) {
})
