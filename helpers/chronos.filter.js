app.filter('chronos', function() {
  return function(date) {
    if (!date) {
      return;
    }

    var time = Date.parse(date);
    var timeNow = new Date().getTime();
    var difference = time - timeNow;
    if (difference < 0) {
      return 'Time\'s Up';
    }

    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    function pad(integer) {
      return integer < 10 ? '0' + integer : integer;
    }

    return 'In ' +
      pad(days) + ' days, ' +
      pad(hours % 24) + ' hours, ' +
      pad(minutes % 60) + ' minutes, ' +
      pad(seconds % 60) + ' seconds';
  };
});
