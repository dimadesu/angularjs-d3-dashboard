'use strict';

angular.module('app.components.process')
.directive('process', function() {
  return {
    restrict: 'E',
    templateUrl: '/components/process/process.html',
    scope: {
      data: '=',
      remove: '&onRemove'
    }
  };
});
