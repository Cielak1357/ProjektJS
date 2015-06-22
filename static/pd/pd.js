'use strict';

angular.module('myApp.pd', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pd', {
    templateUrl: 'pd/pd.html',
    controller: 'pdCtrl'
  });
}])
.controller('pdCtrl', function($scope) {
})
