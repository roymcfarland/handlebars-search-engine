var searchData = require('../models/searchData.js');
var languages = searchData.programming;

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	search: function(req, res) {
		var searchTerm = req.query.query;
		var results = [];
		for(language in languages){
			if(language.toLowerCase() === searchTerm.toLowerCase()){
				results.push(language);
			}
		}
		console.log(results)
	}
};

module.exports = indexController;