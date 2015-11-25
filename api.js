var express = require('express');
var app = express();
var routes = require('./routes');

routes.setupRoutes(app);

app.set('views', './views');
app.set('view engine', 'jade');

var server = app.listen((process.env.PORT || 4000), function () {
  var port = server.address().port;
  console.log('BuyScanApi listening on port %s', port);
});
