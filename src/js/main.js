/*----------------------------
    preloader
----------------------------*/
$(window).on('load', function () {
	$('.preloader').delay(500).fadeOut(500);

	/*----------------------------
    	aos animation
	----------------------------*/
	AOS.init();

	$('header').addClass('nav-active');


});

$(document).ready(function () {
});