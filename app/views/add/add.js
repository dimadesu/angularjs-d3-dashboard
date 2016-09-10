'use strict';

angular.module('app.views.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: '/views/add/add.html',
    controller: 'AddCtrl'
  });
}])

.controller('AddCtrl', [function() {

}]);