var ui_carousel = {
	speed: 2000,
	lazyLoad: true,
	dots: true,
	nav: true,
	items: 1,
	navText: false
};
$(document).ready(function() {
	$(".ui-carousel.ui-carousel-nav").owlCarousel({
		navText: ui_carousel.navText,
		dots: false,
		items: ui_carousel.items,
		nav: ui_carousel.nav,
		lazyLoad: ui_carousel.lazyLoad,
		autoplay: ui_carousel.speed
	});
	$(".ui-carousel.ui-carousel-dots").owlCarousel({
		nav: false,
		items: ui_carousel.items,
		dots: ui_carousel.dots,
		lazyLoad: ui_carousel.lazyLoad,
		autoplay: ui_carousel.speed
	});
	$(".ui-carousel.ui-carousel-nav-dots,.ui-carousel.ui-carousel-dots-nav").owlCarousel({
		navText: ui_carousel.navText,
		items: ui_carousel.items,
		nav: ui_carousel.nav,
		dots: ui_carousel.dots,
		lazyLoad: ui_carousel.lazyLoad,
		autoplay: ui_carousel.speed
	});
});
