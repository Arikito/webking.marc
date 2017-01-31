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


(function(window, document, Math, $) {

	var $document = $(document);
	var $window = $(window);

	var $container;
	var $tabs;
	var $progress;
	var $content;
	var $articles;

	var current = 0;
	var previous = 0;
	var duration = 500;
	var animation = false;

	function enable() {
		animation = false;
	}

	function find(event) {
		var top = event.deltaY < 0;
		var delta = top ? -1 : 1;
		var index = current + delta;
		index = Math.max(index, 0);
		index = Math.min(index, $tabs.length - 1);
		return index;
	}

	function update(index) {
		var top = index < current;
		var width = (index + 1) / $tabs.length * 100;
		animation = true;
		previous = current;
		current = index;
		$progress.css('width', width + '%');
		$tabs
			.eq(previous)
			.removeClass('active');
		$tabs
			.eq(current)
			.addClass('active');
		$articles
			.eq(previous)
			.attr('class', 'products-tabs__tab-content-item')
			.addClass(top ? 'hide-bottom' : 'hide-top');
		$articles
			.eq(current)
			.attr('class', 'products-tabs__tab-content-item')
			.addClass(top ? 'show-top' : 'show-bottom');

		setTimeout(enable, duration);
	}

	function click() {
		if (animation) return;
		var index = $(this).index();
		if (index === current) return;
		update(index);
	}

	function wheel(event) {
		if (animation) return event.preventDefault();
		var index = find(event.originalEvent);
		if (index === current) return;
		update(index);
		event.preventDefault();
	}

	function resize() {
		$content.height(Math.max.apply(null, $articles.map(function() {
			return this.offsetHeight;
		}).get()));
	}

	function events() {
		$tabs.on('click', click);
		$container.on('wheel', wheel);
		$window.on('resize', resize);
		$window.trigger('resize');

	}

	function elements() {
		$container = $('.products-tabs');
		$tabs = $('.products-tabs__nav-item');
		$progress = $('.products-tabs__progress span');
		$content = $('.products-tabs__tab-content');
		$articles = $('.products-tabs__tab-content-item');
	}

	function init() {
		elements();
		events();
	}


	$document.ready(init);

})(window, document, Math, jQuery);