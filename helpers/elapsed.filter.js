app.filter('elapsed', function() {
  return function(date) {
    if (!date) {
      return;
    }

    var time = Date.parse(date);
    var timeNow = new Date().getTime();
    var difference = timeNow - time;
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    if (days > 1) {
      return days + ' days ago';
    } else if (days === 1) {
      return '1 day ago';
    } else if (hours > 1) {
      return hours + ' hours ago';
    } else if (hours === 1) {
      return 'an hour ago';
    } else if (minutes > 1) {
      return minutes + ' minutes ago';
    } else if (minutes === 1) {
      return 'a minute ago';
    } else {
      return 'a few seconds ago';
    }
  };
});
