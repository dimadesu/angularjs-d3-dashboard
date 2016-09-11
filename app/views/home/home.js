'use strict';

angular.module('app.views.home', [
  'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/views/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', 'processesService', function($scope, processesService) {
  $scope.processes = [];

  $scope.addProcess = function () {
    processesService.addNewProcessToRendered();
    $scope.processes = processesService.getProcessesRendered();
  };

  $scope.removeProcess = function (processId) {
    processesService.removeRenderedProcessById(processId);
    $scope.processes = processesService.getProcessesRendered();
  };
}]);