'use strict';

angular.module('app.components.process')
.directive('process', function() {
  return {
    restrict: 'E',
    templateUrl: '/components/process/process.html',
    link: function(scope, elm, attrs) {
      //elm.text(version);
    }
  };
});
