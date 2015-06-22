'use strict';

angular.module('myApp.fiba', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fiba', {
    templateUrl: 'fiba/fiba.html',
    controller: 'fibaCtrl'
  });
}])
.controller('fibaCtrl', function($scope) {
})
