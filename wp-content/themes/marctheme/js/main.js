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


/**
 * home page scroll animation
 */

(function(window, document, $) {



	// -------------------
	// Elements
	// -------------------

	var $window = $(window);
	var $document = $(document);

	var $body;
	var $section;
	var $items;
	var $head;
	var $lines;
	var $links;



	// -------------------
	// Handlers
	// -------------------

	function animate() {
		var index = $(this).parent().index();
		var top = $items.eq(index).offset().top - $head.height();
		$body.stop().animate({
			scrollTop: top
		}, 500);
	}

	function scroll() {

		var top = $window.scrollTop();
		var head = $head.height();
		var offset = $section.offset().top;
		var last = $items.last().offset().top;

		if (top < offset) {
			$head.removeClass('fixed');
			$head.css('top', 0);
		}
		else if (top > last - head) {
			$head.removeClass('fixed');
			$head.css('top', last - head - offset);
		}
		else {
			$head.addClass('fixed');
			$head.css('top', 0);
		}

		$items.each(function(index) {

			var min, max, val;
			var $item = $items.eq(index);
			var $line = $lines.eq(index);
			var $prev = index && $items.eq(index - 1);
			if (index === 0) {
				max = $item.offset().top - head;
				val = Math.min(top / max, 1);
			}
			else {
				min = $prev.offset().top - head;
				max = $item.offset().top - head;
				val = (top - min) / (max - min);
				val = Math.max(val, 0);
				val = Math.min(val, 1);
			}
			$line.css('width', val * 100 + '%');

		})

	}



	// -------------------
	// Initialization
	// -------------------

	function events() {
		$links.on('click', animate);
		$window.on('scroll', scroll);
		$window.on('resize', scroll);
		$window.trigger('scroll');
	}

	function elements() {
		$body = $('html, body');
		$section = $('.products-tabs ');
		$items = $('.products-tabs__tab-content-item');
		$head = $('.products-tabs__head');
		$lines = $head.find('hr');
		$links = $head.find('a');
	}

	function init() {
		elements();
		events();
	}

	$document.ready(init);


})(window, document, jQuery);
