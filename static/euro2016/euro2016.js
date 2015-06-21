'use strict';

angular.module('myApp.euro2016', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/euro2016', {
    templateUrl: 'euro2016/euro2016.html',
    controller: 'euro2016Ctrl'
  });
}])
.controller('euro2016Ctrl', function($scope) {
})
