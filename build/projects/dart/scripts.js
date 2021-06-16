$(document).ready(function () {
	$('.header-acc').click(function() {
		$(this).toggleClass('in').next().slideToggle();
		$('.header-acc').not(this).removeClass('in').next().slideUp();
	})


})