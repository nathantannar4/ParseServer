
var express = require('express');
var ParseDashboard = require('parse-dashboard');
require('dotenv').config();

var port = process.env.PORT || 1337;
var mountPath = process.env.PARSE_MOUNT || '/parse';
var serverURL = (process.env.SERVER_URL || 'https://localhost') + ':' + port + mountPath;

var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": serverURL,
      "appId": process.env.APP_ID,
      "masterKey": process.env.MASTER_KEY,
      "appName": process.env.APP_NAME
    }
  ]
});

var app = express();
app.use('/', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(4040, function() {
    console.log('Now running at ' + "http://localhost:4040");
});
