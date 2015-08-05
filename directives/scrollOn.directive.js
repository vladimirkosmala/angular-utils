app.directive('scrollOn', function() {
  return function(scope, elem, attr) {
    scope.$on('scrollOn', function(e, name) {
      if (name === attr.scrollOn) {
        console.log('je scroll !');
        elem.scrollTop(elem.prop('scrollHeight'));
      }
    });
  };
});
