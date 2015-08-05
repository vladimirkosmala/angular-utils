app.directive('focusField', function($timeout) {
  return function(scope, elem, attr) {
    console.log(elem)
    $timeout(function() {
      elem[0].focus();
    }, 100);
  };
});
