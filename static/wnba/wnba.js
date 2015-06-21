'uwnbastrict';

angular.module('myApp.wnba', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/wnba', {
    templateUrl: 'wnba/wnba.html',
    controller: 'wnbaCtrl'
  });
}])
.controller('nwbaCtrl', function($scope) {
})
