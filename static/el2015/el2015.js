'use strict';

angular.module('myApp.el2015', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/el2015', {
    templateUrl: 'el2015/el2015.html',
    controller: 'el2015Ctrl'
  });
}])
.controller('el2015Ctrl', function($scope) {
})
