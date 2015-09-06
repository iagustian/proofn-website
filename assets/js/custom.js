
'use strict';
$(document).ready(function(){

	var toDate = $('[data-pages-countdown-date]').attr('data-pages-countdown-date');
	$(".year").countdown(toDate, function(event) {
		$(this).text(event.strftime('%Y'))
	});
	$(".month").countdown(toDate, function(event) {
		$(this).text(event.strftime('%m'))
	});
	$(".day").countdown(toDate, function(event) {
		$(this).text(event.strftime('%D'))
	});
	$(".hour").countdown(toDate, function(event) {
		$(this).text(event.strftime('%H'))
	});
	$(".minutes").countdown(toDate, function(event) {
		$(this).text(event.strftime('%M'))
	});
	// $(".seconds").countdown(toDate, function(event) {
	// 	$(this).text(event.strftime('%S'))
	// });

	//Intialize Slider
    var slider = new Swiper('#inner-content-slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
				autoplay: 2500,
        autoplayDisableOnInteraction: false,
        parallax: true,
        speed: 1000
    });
});
