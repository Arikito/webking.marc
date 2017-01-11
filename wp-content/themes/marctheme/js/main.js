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
	$(window).on('load', function() {
		var icons = SVGIcons('.svg-icon');
	    for (var i = 0; i < icons.length; i++) {
	        icons[i].play();
	    }
	});
});
