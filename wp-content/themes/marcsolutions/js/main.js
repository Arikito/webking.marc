
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
	$(document).ready(function(){
		AOS.init();
		$(".latest_news__list").owlCarousel({
			margin: 30,
			loop: true,
			nav: true,
			navText: ['<span class="icon-arrow_back"></span>','<span class="icon-arrow_forward"></span>'],
			dots: false,
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				600: {
					items: 2,
					nav: false
				},
				800: {
					items: 3,
					nav: false
				},
				1300: {
					items: 3,
					nav: true
				}

			}
		});
	});
});
