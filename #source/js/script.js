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
$('.play-btn').click(function (e) {
	e.preventDefault();
	$(this).parent().find('.teacher__video-overlay').fadeOut();
	$(this).parent().find('video').get(0).play();
	$(this).parent().find('.close-video').css("opacity", "1");
	$(this).fadeOut();
});

$('.close-video').click(function () {
	$(this).parent().find('video').fadeOut();
	$(this).parent().find('.teacher__video-overlay, .').fadeIn();
	$(this).css("opacity", "0");
})
//====================  <!-- Video -->  ========================//
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
/*
$('.slider-reviews__body').slick({
	centerMode: true,
	slidesToShow: 3,
	arrows: true,
	nextArrow: '.slider-reviews__btn-',
	prevArrow: '.slider-reviews__btn-prev'
});*/