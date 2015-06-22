'use strict';

angular.module('myApp.fifa2015', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/fifa2015', {
    templateUrl: 'fifa2015/fifa2015.html',
    controller: 'fifa2015Ctrl'
  });
}])
.controller('fifa2015Ctrl', function($scope) {
})
