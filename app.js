var express = require('express');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

// Controllers
var indexController = require('./controllers/index.js');

// Database Connection
// mongoose.connect('mongodb://localhost/handlebars-search-engine');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Main Views
app.get('/', indexController.index);

app.get('/search', indexController.////////);

var server = app.listen(9242, function() {
	console.log('Express server listening on port ' + server.address().port);
});
