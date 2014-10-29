

$(document).on('ready', function() {

	var templateSource = $('#result-template').html();
	var template = Handlebars.compile(templateSource);

	$('#search-form').on('submit', function(e){
		e.preventDefault();
		var searchText = $('#search-text').val();
		$('#search-text').val('');
		var obj = {
			query: searchText
		};
		$.get('/search', obj, function(dataResults){
			
		});
	});

});