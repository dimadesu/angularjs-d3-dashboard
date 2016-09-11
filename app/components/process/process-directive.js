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

      var pieSide = 60;

      scope.pie.options = {
        chart: {
          type: 'pieChart',
          width: pieSide,
          height: pieSide,
          donut: true,
          x: function(d){return d.key;},
          y: function(d){return d.y;},
          showLabels: false,
          showLegend: false,
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      };

      scope.pie.data = [
        {
          key: "Memory",
          y: scope.data.memory
        },
        {
          key: "MemoryAvailable",
          y: 100
        }
      ];

      scope.graph = {};

      scope.graph.options = {
        chart: {
          type: 'stackedAreaChart',
          height: 74,
          showLabels: false,
          showLegend: false,
          showControls: false,
          showXAxis: false,
          showYAxis: false,
          margin : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          },
          x: function(d){return d[0];},
          y: function(d){return d[1];},
          useVoronoi: false,
          clipEdge: true,
          duration: 0,
          useInteractiveGuideline: false
        }
      };

      scope.graph.data = [{
        "key": "Graph",
        "values": scope.data.cpuData
      }];

      // end
    }
  };
});
