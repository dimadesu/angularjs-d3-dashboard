'use strict';

angular.module('app.services')
.factory('processesService', function () {
  var _processes = [
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
  var _processIdsRendered = [];
  
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
});
