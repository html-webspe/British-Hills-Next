//====================  SCROLL ========================//
$(window).scroll(function (event) {
	var scr = $(this).scrollTop();
	sectors(scr);
});
function sectors(scr) {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
}
//====================  <!-- SCROLL --> ========================//
//====================  UP ========================//
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});
//==================== <!-- UP --> ========================//
//====================  testWebP ========================//
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
//====================  testWebP ========================//
var mql = window.matchMedia("(orientation: portrait)");
if (mql.matches) {
	document.querySelector('body').classList.remove('horizon');
} else {
	document.querySelector('body').classList.add('horizon');
}
mql.addListener(function (m) {
	if (m.matches) {
		document.querySelector('body').classList.remove('horizon');
	}
	else {
		document.querySelector('body').classList.add('horizon');
	}
});

//====================  Video  ========================//

$('.teacher-play-btn').click(function () {
	let dataVideo = $(this).closest('.teacher__body').find('.video').attr('data-video');
	$(this).closest('.teacher__body').find('.close-video').css('opacity', '1');
	$(this).fadeOut()
	$(this).parent().parent().find('.teacher__video-overlay').fadeOut();

	$(this)
		.closest('.teacher__body').find('.video')
		.html('<iframe src="https://www.youtube.com/embed/' + dataVideo + '?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
});
$('.close-video').click(function () {

	$(this).closest('.teacher__body').find('.video').html('');
	$(this).parent().parent().find('.teacher__video-overlay, .teacher-play-btn').fadeIn();
	$(this).css("opacity", "0");
})
/*
$('.play-btn').click(function (e) {
	e.preventDefault();
	$(this).parent().find('.teacher__video-overlay').fadeOut();
	$(this).parent().find('video').get(0).play();
	$(this).parent().find('.close-video').css("opacity", "1");
	$(this).fadeOut();
});

*/
//====================  <!-- Video -->  ========================//
$('.tt').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	variableWidth: true,
	nextArrow: '.reviews__slider-btn-next',
	prevArrow: '.reviews__slider-btn-prev',
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}
	]
});
$('form').submit(function (e) {
	e.preventDefault();
	var $form = $(this);
	$.ajax({
		type: "POST",
		url: 'mail.php',
		data: $form.serialize(),
		success: function (data) {
			if (data == 'Cообщение Передано!') {
				$form.trigger("reset");
				window.location.href = "http://thanks.html";
				popupClose();
			}
		}
	})
});
//========================================================//

