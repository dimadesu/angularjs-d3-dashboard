'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'nvd3',
  'ngRoute',
  'ngAnimate',
  'ui.bootstrap',
  'app.services',
  'app.components',
  'app.views'
])
.run(function($animate) {
  $animate.enabled(true);
})
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
