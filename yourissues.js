angular.module('YourIssues', ['ngResource'])

function IssuesController($scope, $resource) {
  $scope.github = $resource('https://api.github.com/repos/phansch/your-issues/issues',
                            {callback: 'JSON_CALLBACK'},
                            {get: { method: 'JSONP' }});
  $scope.issues = $scope.github.get();
}
