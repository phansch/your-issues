function MainCtrl($scope, $location, $route) {
  var activePath = null;

  $scope.$on('$routeChangeSuccess', function(){
    activePath = $location.path();
    console.log( $location.path() );
  });

  $scope.isActive = function( pattern ) {
    return (new RegExp( pattern )).test( activePath );
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
