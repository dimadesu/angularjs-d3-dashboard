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

.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.processes = [
    {
      id: 1,
      cpu: 73,
      status: 'On',
      instances: 4,
      memory: 1,
      upTime: '00:00:20',
      restarts: 0
    },
    {
      id: 2,
      cpu: 50,
      status: 'Off',
      instances: 2,
      memory: 50,
      upTime: '00:03:00',
      restarts: 3
    },
    {
      id: 3,
      cpu: 10,
      status: 'On',
      instances: 1,
      memory: 9,
      upTime: '04:00:00',
      restarts: 0
    }
  ];

  $scope.removeProcess = function (processId) {
    $scope.processes = $scope.processes.filter(function (item) {
      return item.id !== processId;
    });
  };
}]);