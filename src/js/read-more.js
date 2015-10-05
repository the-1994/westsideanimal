app.readMore = function () {
	$('.read-more-text').hide();
	$('.hide-text').hide();
	
	
	$('.read-more').click(function() {
			$('.read-more-text').show('slow');
			$('.hide-text').show();
			$('.read-more').hide();
	});
	
	$('.hide-text').click(function() {
			$('.read-more-text').hide('slow');
			$('.read-more').show();
			$('.hide-text').hide();
	});
	
	
};