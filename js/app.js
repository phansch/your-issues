var yourIssuesApp = angular.module('yourIssuesApp', ['ngResource', 'ngRoute']);

yourIssuesApp.directive('keybinding', function () {
  return {
    restrict: 'E',
    scope: {
      invoke: '&'
    },
    link: function (scope, el, attr) {
      Mousetrap.bind(attr.on, scope.invoke);
    }
  };
});

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
     when('/issues/new', {
     templateUrl: 'partials/issue-new.html',
     controller: 'NewIssueController'
   }).
     otherwise({
     redirectTo: '/'
   });
 }
]);
