'use strict';

angular.module('myApp.acb', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/acb', {
    templateUrl: 'acb/acb.html',
    controller: 'acbCtrl'
  });
}])
.controller('acbCtrl', function($scope) {
})
