app.hamburgerMenu = function () {
	$('.nav-item a').hide();


	$('.header').on('click', ".nav-trigger", function () {
	$('.site-wrap').toggleClass('slide-left');
	$('.navigation').toggleClass('nav-shower');
	});

};
