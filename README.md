# angular-utils
Some helpers and directives with AngularJS, no dependency.

## Filters

| File | Description |
| --- | --- |
| chronos.filter.js | How much time for a date in the future, ex: "In 5 days"
| elapsed.filter.js | How much time for a date in the past, ex: "5 days ago"
| escape.filter.js | encodeURIComponent, ex: "?name={{name \| escape}}"
| parse-int.filter.js | parseInt, ex: "{{progressFloat \| parseInt:10}}%"
| trustUrl.filter.js | Trust external links, ex: "ng-href="{{link \| trustUrl}}"
| url.filter.js | Get part of a URL, ex: "Host: {{url \| url:'host'}}, Port: {{url \| url:'port'}}"

## Directives

| File | Description |
| --- | --- |
| default-protocol.directive.js | Add a specified protocol on user input, ex: defaultProtocol="http"
| disable-animation.directive.js  | Disable animations when not supported
| exportExcelTable.directive.js | Target a html table to be downloaded as excel file
| exportExcelTrigger.js | Trigger the download of excel file (see above)
| focus-field.directive.js  | Target an input to be focused
| focus-on.directive.js | Trigger the focus (see above)
| scroll.directive.js | Target an element to be scrolled down
| scrollOn.directive.js | Trigger the scroll (see above)
| video.directive.js  | Stop streaming a video when the tag is deleted from the DOM
