'use strict';

angular.module('myApp.ca2015', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ca2015', {
    templateUrl: 'ca2015/ca2015.html',
    controller: 'ca2015Ctrl'
  });
}])
.controller('ca2015Ctrl', function($scope) {
})
