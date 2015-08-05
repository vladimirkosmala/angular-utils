app.filter('url', function() {
  return function(urlLink, field, defaultValue) {
    try {
      var url =  new URL(urlLink);
    } catch (e) {
      return defaultValue;
    }

    return url[field];
  };
});
