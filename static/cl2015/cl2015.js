'use strict';

angular.module('myApp.cl2015', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cl2015', {
    templateUrl: 'cl2015/cl2015.html',
    controller: 'cl2015Ctrl'
  });
}])
.controller('cl2015Ctrl', function($scope) {
})
