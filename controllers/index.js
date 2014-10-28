var searchData = require('../models/searchData.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	search: function(req, res) {
		// res.send('searchData')
	}
};

module.exports = indexController;