
// Push Notifications
require('./push_notifications');

Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});
