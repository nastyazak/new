$(document).ready(function(){
	$('.slider').slick({
		speed:1000,
		infinite: false,
		adaptiveHeight: true,
		variableWidth: true,
		slidesToShow: 1
	});
	function hideSliderArrows() {
	    if ($(window).width() < 768) {
	      $('.slider .slick-prev, .slider .slick-next').hide();
	    } else {
	      $('.slider .slick-prev, .slider .slick-next').show();
	    }
	}

  	hideSliderArrows();

	$(window).resize(function() {
	  hideSliderArrows();
	});
});