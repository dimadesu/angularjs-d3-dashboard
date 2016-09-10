'use strict';

angular.module('app.views.home', [
  'ngRoute',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/views/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', [function() {

}]);