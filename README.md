# angular-utils
Some helpers and directives with AngularJS, no dependency.

| Filter | Description |
| --- | --- |
| chronos.filter.js | How much time for a date in the future, ex: "In 5 days"
| elapsed.filter.js | How much time for a date in the past, ex: "5 days ago"
| escape.filter.js | encodeURIComponent, ex: "?name={{name \| escape}}"
| parse-int.filter.js | parseInt, ex: "{{progressFloat \| parseInt:10}}%"
| trustUrl.filter.js | Trust external links, ex: "ng-href="{{link \| trustUrl}}"
| url.filter.js | Get part of a URL, ex: "Host: {{url \| url:'host'}}, Port: {{url \| url:'port'}}"
