
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var controllers = require('./controllers/taskController');
var http = require('http');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var taskController = new controllers.controllers.taskController();
routes.setup(app, taskController);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
