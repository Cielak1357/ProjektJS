'use strict';

angular.module('myApp.serieA', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/serieA', {
    templateUrl: 'serieA/serieA.html',
    controller: 'serieACtrl'
  });
}])
.controller('serieACtrl', function($scope) {
})
