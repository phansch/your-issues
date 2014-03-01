function MainCtrl($scope, $location, $route) {
  var activePath = null;

  $scope.$on('$routeChangeSuccess', function(){
    activePath = $location.path();
    console.log( $location.path() );
  });

  $scope.isActive = function( pattern ) {
    return (new RegExp( pattern )).test( activePath );
  };

  $scope.gotoOpenIssues = function() {
    $location.path('/issues/open');
    if(!$scope.$$phase) $scope.$apply();
  };

  $scope.gotoClosedIssues = function() {
    $location.path('/issues/closed');
    if(!$scope.$$phase) $scope.$apply();
  };

  $scope.gotoCreateIssue = function() {
    $location.path('/issues/new');
    if(!$scope.$$phase) $scope.$apply();
  };

}
function ClosedIssuesController($scope, $resource) {
  $scope.github = $resource('https://api.github.com/repos/phansch/your-issues/issues',
                            {state: 'closed', callback: 'JSON_CALLBACK'},
                            {get: { method: 'JSONP' }});
  $scope.issues = $scope.github.get();
}

function OpenIssuesController($scope, $resource) {
  $scope.github = $resource('https://api.github.com/repos/phansch/your-issues/issues',
                            {state: 'open', callback: 'JSON_CALLBACK'},
                            {get: { method: 'JSONP' }});
  $scope.issues = $scope.github.get();
}

function NewIssueController($scope, $resource) {
  $scope.github = $resource('https://api.github.com/repos/phansch/your-issues/labels',
                       {callback: 'JSON_CALLBACK'},
                       {get: { method: 'JSONP' }});
  $scope.tags = $scope.github.get();
  $("#title").focus();
}
