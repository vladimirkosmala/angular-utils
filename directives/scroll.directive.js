app.factory('scroll', function($rootScope, $timeout) {
  return function(name) {
    $timeout(function() {
      $rootScope.$broadcast('scrollOn', name);
    });
  };
});
