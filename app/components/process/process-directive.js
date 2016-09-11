'use strict';

angular.module('app.components.process')
.directive('process', function() {
  return {
    restrict: 'E',
    templateUrl: '/components/process/process.html',
    scope: {
      data: '=',
      remove: '&onRemove'
    },
    link: function (scope, element, attrs) {
      scope.isStatusOn = scope.data.status === 'On';
      scope.isTooManyRestarts = scope.data.restarts > 0;
    }
  };
});
