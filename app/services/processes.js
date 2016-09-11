'use strict';

angular.module('app.services')
.factory('processesService', ['$http', function ($http) {
  var _processes = [];
  var _processIdsRendered = [];

  $http.get('/services/processes.json').then(function(response) {
      _processes = response.data;
    }, function(response) {
      console.log(response);
    }
  );
  
  function _getNotRenderedItem(processes, processIdsRendered) {
    var idsNotRendered = processes.map(function (item) {
      return item.id;
    }).filter(function (id) {
      return processIdsRendered.includes(id) === false;
    });
    var idToFind = idsNotRendered[0];
    var itemToReturn = processes.find(function (item) {
      return item.id === idToFind;
    });
    return itemToReturn;
  }
  
  var processesService = {};
  
  processesService.addNewProcessToRendered = function () {
    var notRenderedProcess = _getNotRenderedItem(_processes, _processIdsRendered);
    if (notRenderedProcess !== undefined) {
      _processIdsRendered.push(notRenderedProcess.id);
    }
  };
  
  processesService.getProcessesRendered = function () {
    return _processes.filter(function (item) {
      return _processIdsRendered.includes(item.id);
    });
  };
  
  processesService.removeRenderedProcessById = function (id) {
    _processIdsRendered = _processIdsRendered.filter(function (_id) {
      return _id !== id;
    });
  };
  
  return processesService;
}]);
