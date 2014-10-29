var express = require('express');
var bodyParser = require('body-parser');
var searchData = require('./models/searchData.js');

// Controllers
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.get('/', indexController.index);
app.get('/search', indexController.search);

var server = app.listen(9242, function() {
	console.log('Express server listening on port ' + server.address().port);
});