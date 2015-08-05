app.directive('exportExcelTrigger', function($rootScope) {
  return function(scope, elem, attr) {
    elem.bind('click', function() {
      $rootScope.$broadcast('exportExcel', attr.exportExcelTrigger);
    });
  };
});
