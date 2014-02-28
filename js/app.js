var yourIssuesApp = angular.module('yourIssuesApp', ['ngResource', 'ngRoute']);

yourIssuesApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/issues/closed', {
        templateUrl: 'partials/issue-list.html',
        controller: 'ClosedIssuesController'
      }).
      when('/issues/open', {
        templateUrl: 'partials/issue-list.html',
        controller: 'OpenIssuesController'
      }).
    otherwise({
      redirectTo: '/'
    });
  }
]);
