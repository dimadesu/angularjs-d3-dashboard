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

      scope.htmlTooltip = '/components/process/restart-dates.html';

      scope.pie = {};

      scope.pie.options = {
        chart: {
          type: 'pieChart',
          width: 100,
          height: 100,
          donut: true,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: false,
          showLegend: false,
          legend: {
            margin: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        }
      };

      scope.pie.data = [
        {
          key: "One",
          y: scope.data.memory
        },
        {
          key: "Two",
          y: 100
        },
      ];
    }
  };
});
