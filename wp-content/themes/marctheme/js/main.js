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

(function(window, document, jQuery) {

	var $window = $(window);
	var $document = $(document);

	var $section;
	var $head;
	var $items;
	var $lines;




	// -------------------
	// Handlers
	// -------------------

	function scroll() {
		var top = $window.scrollTop();
		var head = $head.height();

		if (top < $section.offset().top) {
			$head.removeClass('fixed');
			$head.css('top', 0);
		}
		else if (top > $items.last().offset().top - head) {
			$head.removeClass('fixed');
			$head.css('top', $items.last().offset().top - head - $section.offset().top);
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
		$window.on('scroll', scroll);
		$window.trigger('scroll');
	}

	function elements() {
		$section = $('.products-tabs ');
		$head = $('.products-tabs__head');
		$lines = $head.find('hr');
		$items = $('.products-tabs__tab-content-item');
	}

	function init() {
		elements();
		events();
	}

	$document.ready(init);


})(window, document, jQuery);
