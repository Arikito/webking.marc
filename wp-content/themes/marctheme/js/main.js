$(function(){
	$('.nav-tabs a').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
	$('.dropdown-submenu a').on("click", function(e){
		$(this).next('ul').toggle();
		e.stopPropagation();
		// e.preventDefault();
	});
	$('.updates-list__filter_js').on('click', function() {
		$('.updates-list__menu').toggleClass('opened');
	});
	var icons = SVGIcons('.svg-icon');
    for (var i = 0; i < icons.length; i++) {
        icons[i].play();
    }
    if($('body').hasClass('home')){
		var intro = SVGIcons('#intro')[0];
		intro.play();
		setTimeout(intro.stop.bind(intro), 11000);
	}

	AOS.init();

});