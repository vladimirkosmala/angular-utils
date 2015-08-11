app.directive('defaultProtocol', function($timeout) {
  var regexURLProtocol = /^[a-zA-Z0-9]{1,20}\:\/\/.*$/;

  var forceInputProtocol = function(input, protocol) {
    var text = input.val();

    if (!text) {
      return;
    }

    var hasProtocol = text.match(regexURLProtocol);
    if (text && !hasProtocol) {
      // input par défaut
      input.val(protocol + '://' + text);
    }
    input.trigger('change');
  };

  return {
    restrict: 'A', // only activate on element attribute
    scope: {
      defaultProtocol: '='
    },
    link: function(scope, element, attrs, ngModel) {
      var protocol = attrs.defaultProtocol || 'http';

      element.on('paste change', function(e) {
        // let browser set clipboard before checking
        $timeout(forceInputProtocol.bind(this, element, protocol), 0);
      });
    }
  };
});
