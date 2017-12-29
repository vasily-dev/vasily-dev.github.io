$(function() {
	// jquery tabs
	$(".tab_item").not(":first").hide();
	$(".place .tab").click(function() {
		$(".place .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	// slick slider
	$('.slider-slick').slick({
	  centerMode: true,
		centerPadding: '60px',
		slidesToShow: 3,
		arrows: true,
		// adaptiveHeight: true,
		variableWidth: true,
		arrows: true,
		dots: true
	});


	// slick slider2
	$('.bottom-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		// autoplay: true,
		arrows: false,
		autoplaySpeed: 5000
	});

	$('.bottom-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var number = currentSlide;

		if (number == 0) {
	  	// console.log('0');
	  	$('#js-second-bottom-slider div').removeClass('active-photo');
	  	$('#js-second-bottom-slider div').eq(number).addClass('active-photo');

	  	// method anime
	  	// $('#js-second-bottom-slider div img').eq(number).animate({width: "65px"}, 1000);
	  	// $('#js-second-bottom-slider div img').eq(number).animate({width: "103px"}, 1000);
		}
		else if (number == 1) {
	  	//console.log('1');
	  	$('#js-second-bottom-slider div').removeClass('active-photo');
	  	$('#js-second-bottom-slider div').eq(number).addClass('active-photo');
		}
		else if (number == 2) {
	  	// console.log('2');
	  	$('#js-second-bottom-slider div').removeClass('active-photo');
	  	$('#js-second-bottom-slider div').eq(number).addClass('active-photo');
		}
		else if (number == 3) {
	  	// console.log('3');
	  	$('#js-second-bottom-slider div').removeClass('active-photo');
	  	$('#js-second-bottom-slider div').eq(number).addClass('active-photo');
		}
		else if (number == 4) {
	  	// console.log('4');
	  	$('#js-second-bottom-slider div').removeClass('active-photo');
	  	$('#js-second-bottom-slider div').eq(number).addClass('active-photo');
		}
	});

	// click to img
	$('.second-bottom-slider div').on('click', function(e) {
		var dataNum = $(this).attr('data-num');
		
		$('.bottom-slider').slick('slickGoTo', dataNum-1, true);
	});

	// checkbox
	// learn
	$('.learn input[type="checkbox"]').on('click', function(e) {
		if($('.learn input[type="checkbox"]').prop("checked")) {
			$('.learn-hidden').css('display','block');
		}
		else {
			$('.learn-hidden').css('display','none');
		}
	});

	// 2 events
	$('.equipment-hidden .left button').on('click', function(e) {
		$('.equipment-hidden .left button').removeClass('active-btn');
		$(this).addClass('active-btn');

		if($(this).attr('data-number') == 1) {
			$('.equipment-hidden .right .top p').text('Сноуборд, ботинки');
		}
		else {
			$('.equipment-hidden .right .top p').text('Лыжи, палки, ботинки');
		}
	});


	$('.rental-of-equipment #checkbox2').on('click', function(e) {
		if($('.rental-of-equipment #checkbox2').prop("checked")) {
			$('.equipment-hidden').css('display','block');
		}
		else {
			$('.equipment-hidden').css('display','none');
		}
	});

	
	

	// popups
	// js-popup-tour
	$('#js-popup-tour').on('click', function(e) {
		e.preventDefault();

		// поиск button close
		$('#js-close-popup').on('click', function(e) {
			// $('.popup-tour').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			$('.popup-tour').slideUp();
			$('.popup-overlay').css('display', 'none');
		});

		// поиск popup tour и popup-overlay
		// $('.popup-tour').css('display', 'block');
		// $('.popup-overlay').css('display', 'block');
		$('.popup-tour').slideDown();
		$('.popup-overlay').css('display', 'block');
	});


	// js-popup-tour2
	$('#js-popup-tour2').on('click', function(e) {
		e.preventDefault();

		// поиск button close
		$('#js-close-popup').on('click', function(e) {
			// $('.popup-tour').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			$('.popup-tour').slideUp();
			$('.popup-overlay').css('display', 'none');
		});

		// поиск popup tour и popup-overlay
		// $('.popup-tour').css('display', 'block');
		// $('.popup-overlay').css('display', 'block');
		$('.popup-tour').slideDown();
		$('.popup-overlay').css('display', 'block');
	});


	// js-popup-tour3
	$('.js-popup-tour3').on('click', function(e) {
		e.preventDefault();

		// поиск button close
		$('#js-close-popup').on('click', function(e) {
			// $('.popup-tour').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			$('.popup-tour').slideUp();
			$('.popup-overlay').css('display', 'none');
		});

		// поиск popup tour и popup-overlay
		// $('.popup-tour').css('display', 'block');
		// $('.popup-overlay').css('display', 'block');
		$('.popup-tour').slideDown();
		$('.popup-overlay').css('display', 'block');
	});

	// js-popup-tour4
	$('.js-popup-tour4').on('click', function(e) {
		e.preventDefault();

		// поиск button close
		$('#js-close-popup').on('click', function(e) {
			// $('.popup-tour').css('display', 'none');
			// $('.popup-overlay').css('display', 'none');
			$('.popup-tour').slideUp();
			$('.popup-overlay').css('display', 'none');
		});

		// поиск popup tour и popup-overlay
		// $('.popup-tour').css('display', 'block');
		// $('.popup-overlay').css('display', 'block');
		$('.popup-tour').slideDown();
		$('.popup-overlay').css('display', 'block');
	});


	// js-popup-call
	// $('#js-popup-call').on('click', function(e) {
	// 	e.preventDefault();

	// 	// поиск button close
	// 	$('#js-close-popup').on('click', function(e) {
	// 		$('.popup-tour').css('display', 'none');
	// 		$('.popup-overlay').css('display', 'none');
	// 	});

	// 	// поиск popup tour и popup-overlay
	// 	$('.popup-tour').css('display', 'block');
	// 	$('.popup-overlay').css('display', 'block');
	// });



});