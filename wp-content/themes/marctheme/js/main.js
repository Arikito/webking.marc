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
	$(document).ready(function(){
		AOS.init();
	});
});


(function(window, document, Math, $) {



	// -------------------
	// Elements
	// -------------------

	var $document = $(document);
	var $window = $(window);

	var $scroll;
	var $tabs;
	var $progress;
	var $content;
	var $articles;
	var $first;

	// -------------------
	// Handlers
	// -------------------

	function click() {
		var article = $articles[$(this).index()];
		$scroll.stop().animate({
			scrollTop: article.offsetTop - ($scroll.height() - article.offsetHeight)
		}, 500);
	}

	function scroll() {
		var progress = $scroll.scrollTop() / ($scroll.prop('scrollHeight') - $scroll.height());
		$progress.width(20 + 80 * progress + '%');
		$tabs.removeClass('active');
		$articles.each(function(index, node) {
			if (node.offsetHeight + node.offsetTop >= $scroll.scrollTop() + $scroll.height()) {
				$tabs.eq(index).addClass('active');
				return false;
			}
		})

	}

	function resize() {
		$content.height($first.outerHeight());
	}



	// -------------------
	// Initialization
	// -------------------

	function values() {
		$scroll.css('right', $first.width() - $content.width());
	}

	function events() {
		$tabs.on('click', click);
		$scroll.on('scroll', scroll);
		$window.on('resize', resize);
		$window.trigger('resize');
	}

	function elements() {
		$tabs = $('.products-tabs__nav-item');
		$progress = $('.products-tabs__progress span');
		$content = $('.products-tabs__tab-content');
		$scroll = $('.products-tabs__tab-scroll');
		$articles = $('.products-tabs__tab-content-item');
		$first = $articles.first();
	}

	function init() {
		elements();
		events();
		values();
	}

	$document.ready(init);
})(window, document, Math, jQuery);