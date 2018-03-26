'use strict';
var logo1 = document.querySelector('#logo-1');
var text1 = document.querySelector('#text-1-block');
var logo2 = document.querySelector('#logo-2');
var text2 = document.querySelector('#text-2-block');
var logo3 = document.querySelector('#logo-3');
var text3 = document.querySelector('#text-3-block');
var text31 = document.querySelector('#text-3-1');
var text32 = document.querySelector('#text-3-2');
var text33 = document.querySelector('#text-3-3');
var logo4 = document.querySelector('#logo-4');
var text4 = document.querySelector('#text-4-block');
var logo5 = document.querySelector('#logo-5');
var text5 = document.querySelector('#text-5-block');
var logos = document.querySelectorAll('.logo');
var logoWidth = $('#logo-1').width();
// var iconWidth = $('#vk').width();
var iconWidth = getComputedStyle(document.querySelector('.social-bar')).width



$('.logo').css('height', logoWidth);
$('.social-link, .social-wrapper').css('height', iconWidth);

$(window).resize(function () {
	for (var i = 0; i < document.querySelectorAll('.text-wrapper'); i++) {
		var heightBlock = document.querySelectorAll('.text-wrapper')[i].document.querySelector('.header').height() +
											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.text').height() +
											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.button').height() +
											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.text-block').style.paddingTop +
											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.text-block').style.paddingBottom +
											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.header').style.marginTop +
											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.text').style.marginBottom +
		$('#text-' + [i] + '-wrapper').css('height', heightBlock);
		$('#text-' + [i] + '-wrapper').css('min-height', heightBlock + 50);
	}
})

// $(window).on('load', function () {
// 	for (var i = 0; i < document.querySelectorAll('.text-wrapper'); i++) {
// 		var heightBlock = document.querySelectorAll('.text-wrapper')[i].document.querySelector('.header').height() +
// 											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.text').height() +
// 											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.button').height() +
// 											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.text-block').style.paddingTop +
// 											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.text-block').style.paddingBottom +
// 											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.header').style.marginTop +
// 											document.querySelectorAll('.text-wrapper')[i].document.querySelector('.text').style.marginBottom +
// 		$('#text-' + [i] + '-wrapper').css('height', heightBlock);
// 		$('#text-' + [i] + '-wrapper').css('min-height', heightBlock + 50);
// 	}
// })

$(window).resize(function () {
	var logoWidth = $('#logo-1').width();
	var iconWidth = $('#vk').width();
	$('.logo').css('height', logoWidth);
	$('.social-link, .social-wrapper').css('height', iconWidth);
})



function hideContentDiv (i) {
	var textBlockIncludes = '#text-' + i + '-block *';
	var logoText = '#logo-' + i + '-text';
	var textBlock = '#text-' + i + '-block';
	var logo = '#logo-' + i;
	$(logo).removeClass('logo-shadow-1').removeClass('logo-shadow-2');
	$(textBlockIncludes).fadeOut(200);
	$(logoText).fadeIn(500);
	$(textBlock).slideUp('slow');
}

//logo-1

function showContentDiv1 () {
	$('#logo-1').addClass('logo-shadow-1');
	$('#logo-1-text').fadeOut(200);
	$('#text-1-block *').fadeIn(1500);
	$('#text-1-block').slideDown('slow');
	$('#text-1-block').css('z-index', 29);
	var heightBlock = $('#header-1').height() +
										$('#text-1').height() +
										$('#button-1').height() +
										parseInt($('#text-1-block').css("padding-top").split('p')[0]) +
										parseInt($('#text-1-block').css("padding-bottom").split('p')[0]) +
										parseInt($('#header-1').css("margin-bottom").split('p')[0]) +
										parseInt($('#text-1').css("margin-bottom").split('p')[0]);
	$('#text-1-wrapper').css('height', heightBlock);
	$('#text-1-wrapper').css('min-height', heightBlock + 80);

	document.addEventListener('click', function (evt) {
		if (evt.target.classList.contains('text-wrapper')
			|| evt.target.classList.contains('logo') || evt.target.classList.contains('logo-layer')
			|| evt.target.classList.contains('text-block')
			|| evt.target.classList.contains('header') || evt.target.classList.contains('text')
			|| evt.target.classList.contains('btn')) {
				logo1.removeEventListener('click', showContentDiv1);
		} else {
			setTimeout(function() {
				hideContentDiv(1)
				logo1.addEventListener('click', showContentDiv1);
			}, 200);
		}
	});
}

logo1.addEventListener('click', showContentDiv1);

//logo-2

function showContentDiv2 () {
	$('#logo-2').addClass('logo-shadow-1');
	$('#logo-2-text').fadeOut(200);
	$('#text-2-block *').fadeIn(1500);
	$('#text-2-block').slideDown('slow');
	var heightBlock = $('#header-2').height() +
										$('#text-2').height() +
										$('#button-2').height() +
										parseInt($('#text-2-block').css("padding-top").split('p')[0]) +
										parseInt($('#text-2-block').css("padding-bottom").split('p')[0]) +
										parseInt($('#header-2').css("margin-bottom").split('p')[0]) +
										parseInt($('#text-2').css("margin-bottom").split('p')[0]);
	$('#text-2-wrapper').css('height', heightBlock);
	$('#text-2-wrapper').css('min-height', heightBlock + 100);
	// $('#text-2-block').css('z-index', 29);
	document.addEventListener('click', function (evt) {
		if (evt.target.classList.contains('text-wrapper')
			|| evt.target.classList.contains('logo') || evt.target.classList.contains('logo-layer')
			|| evt.target.classList.contains('text-block')
			|| evt.target.classList.contains('header') || evt.target.classList.contains('text')
			|| evt.target.classList.contains('btn')) {
				logo2.removeEventListener('click', showContentDiv2);
				return;
		} else {
			setTimeout(function() {
				hideContentDiv(2)
				logo2.addEventListener('click', showContentDiv2);
			}, 200);
		}
	});
}

logo2.addEventListener('click', showContentDiv2);

//logo-3

function showContentDiv3 () {
	$('#logo-3').addClass('logo-shadow-2');
	$('#logo-3-text').fadeOut(200);
	$('.text-3-container').fadeIn(0);
	$('#text-3-block #header-3').fadeIn(0);
	$('#text-3-block #button-3').fadeIn(0);
	$('#text-3-1-span').fadeIn(500);
	$('#text-3-1').fadeIn(1000);
	setTimeout(function () {
		$('#text-3-2-span').fadeIn(500);
		$('#text-3-2').fadeIn(3000);
	}, 1000);
	setTimeout(function () {
		$('#text-3-3-span').fadeIn(500);
		$('#text-3-3').fadeIn(3000);
	}, 2000)
	$('#text-3-block').slideDown('slow');
	document.addEventListener('click', function (evt) {
		if (evt.target.classList.contains('text-wrapper')
			|| evt.target.classList.contains('logo') || evt.target.classList.contains('logo-layer')
			|| evt.target.classList.contains('text-block')
			|| evt.target.classList.contains('header') || evt.target.classList.contains('text')
			|| evt.target.classList.contains('btn')) {
				logo3.removeEventListener('click', showContentDiv3);
				return;
		} else {
			$('#text-3-block, #header-3, #button-3, #text-3-1-span, #text-3-1, #text-3-2-span, #text-3-2, #text-3-3-span, #text-3-3').stop().css('display', 'none');
			setTimeout(function() {
				hideContentDiv(3);
				logo3.addEventListener('click', showContentDiv3);
			}, 0)
		}
	});
	if(screen.width === 1366 && screen.height === 768 || screen.width === 1920 && screen.height === 1080) {
		return;
	} else {
	var heightBlock = $('#header-3').height() +
										$('#text-3-container').height() +
										$('#button-3').height() +
										parseInt($('#text-3-block').css("padding-top").split('p')[0]) +
										parseInt($('#text-3-block').css("padding-bottom").split('p')[0]) +
										parseInt($('#header-3').css("margin-bottom").split('p')[0])
										// parseInt($('#text-3-container').css("margin-bottom").split('p')[0]);
	$('#text-3-wrapper').css('height', heightBlock);
	$('#text-3-wrapper').css('min-height', heightBlock + 330);
	}
	// $('#text-3-block').css('z-index', 29);
}

logo3.addEventListener('click', showContentDiv3);
//logo-4

function showContentDiv4 () {
	$('#logo-4').addClass('logo-shadow-1');
	$('#logo-4-text').fadeOut(200);
	$('#text-4-block *').fadeIn(1500);
	$('#text-4-block').slideDown('slow');
	var heightBlock = $('#header-4').height() +
										$('#text-4').height() +
										$('#button-4').height() +
										parseInt($('#text-4-block').css("padding-top").split('p')[0]) +
										parseInt($('#text-4-block').css("padding-bottom").split('p')[0]) +
										parseInt($('#header-4').css("margin-bottom").split('p')[0]) +
										parseInt($('#text-4').css("margin-bottom").split('p')[0]);
	$('#text-4-wrapper').css('height', heightBlock);
	$('#text-4-wrapper').css('min-height', heightBlock + 100);
	// $('#text-4-block').css('z-index', 29);
	document.addEventListener('click', function (evt) {
		if (evt.target.classList.contains('text-wrapper')
		 	|| evt.target.classList.contains('logo') || evt.target.classList.contains('logo-layer')
			|| evt.target.classList.contains('text-block')
			|| evt.target.classList.contains('header') || evt.target.classList.contains('text')
			|| evt.target.classList.contains('btn')) {
				logo4.removeEventListener('click', showContentDiv4);
				return;
		} else {
			setTimeout(function() {
				hideContentDiv(4)
				logo4.addEventListener('click', showContentDiv4);
			}, 200)
		}
	});
}

logo4.addEventListener('click', showContentDiv4);

//logo-5

function showContentDiv5 () {
	$('#logo-5').addClass('logo-shadow-2');
	$('#logo-5-text').fadeOut(200);
	$('#text-5-block *').fadeIn(1500);
	$('#text-5-block').slideDown('slow');
	document.addEventListener('click', function (evt) {
		if (evt.target.classList.contains('text-wrapper')
		 	|| evt.target.classList.contains('logo') || evt.target.classList.contains('logo-layer')
			|| evt.target.classList.contains('text-block')
			|| evt.target.classList.contains('header') || evt.target.classList.contains('text')
			|| evt.target.classList.contains('btn') || evt.target.classList.contains('registration')
			|| evt.target.classList.contains('form-group') || evt.target.classList.contains('form-field')
			|| evt.target.classList.contains('form-button')) {
				logo5.removeEventListener('click', showContentDiv5);
				return;
		} else {
			setTimeout(function() {
				hideContentDiv(5)
				logo5.addEventListener('click', showContentDiv5);
			}, 200)
		}
	});
	if(screen.width === 1920 && screen.height === 1080) {
		return;
	} else {
		// var heightBlock = $('#header-5').height() +
		// 									$('#text-5').height() +
		// 									$('#button-5').height() +
		// 									parseInt($('#text-5-block').css("padding-top").split('p')[0]) +
		// 									parseInt($('#text-5-block').css("padding-bottom").split('p')[0]) +
		// 									parseInt($('#header-5').css("margin-bottom").split('p')[0]) +
		// 									parseInt($('#text-5').css("margin-bottom").split('p')[0]);
		// $('#text-5-wrapper').css('height', heightBlock);
		// $('#text-5-wrapper').css('min-height', heightBlock + 370);
	}
}

logo5.addEventListener('click', showContentDiv5);

// анімація бутыля

var tl = new TimelineMax({
      repeat: -1
    });
var yoyo = tl.yoyo();
tl.yoyo(true);
tl.to($('.bottle'), 2, {y:-5, ease: Power0.easeNone});

// анімація облаков

var tl2 = new TimelineMax({
      repeat: -1
    });
tl2.to($('.clouds-2'), 260, {css: {backgroundPosition: '-10000px'}, ease: 'none'});

var tl3 = new TimelineMax({
      repeat: -1
    });
tl3.fromTo($('.clouds-2'), 800, {css: {backgroundPosition: '5500px'}}, {css: {backgroundPosition: '-5000px'}, ease: 'none'});

var tl4 = new TimelineMax({
      repeat: -1
    });
tl4.fromTo($('.clouds-3'), 160, {css: {backgroundPosition: '1000px'}}, {css: {backgroundPosition: '-2000px'}, ease: 'none'});

//анимаиция воды

var tl5 = new TimelineMax({
      repeat: -1
    });
tl5.fromTo($('.water'), 400, {css: {backgroundPosition: '0px'}}, {css: {backgroundPosition: '11400px'}, ease: 'none'});

var tl6 = new TimelineMax({
      repeat: -1
    });
tl6.fromTo($('.water-2'), 1000, {css: {backgroundPosition: '1040px'}}, {css: {backgroundPosition: '11400px'}, ease: 'none'});

//анімація тені кружочков
var tl7 = new TimelineMax({
      repeat: -1
    });
tl7.yoyo(true)
tl7.to($('.logo'), 1,  {css:{boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.7)"}});

//обработка формы

// $(window).on('load', function () {
// 	$.ajax ({
// 		url: './data.php',
// 		type: 'GET',
// 		success: function(data){
// 			if (data && data.indexOf('На жаль, усе месцы на бліжэйшую экскурсію забраніраваны.') !== -1) {
// 				$('#text-5').html(data);
// 				$('#text-5-block form').remove()
// 			} else {
// 				return;
// 			}
// 		}
// 	});
// })

// $('.form-button').on('click', function (evt) {
// 	evt.preventDefault();
// 	if (!$('.form-group').hasClass('has-danger') &&
// 		!$('.form-group').hasClass('has-error') &&
// 		$('.form-field').val() !== '') {
// 			$.ajax ({
// 				url: './data.php',
// 				type: 'POST',
// 				data: ({name: $('#inputName').val(),
// 								phone: $('#phone').val(),
// 							email: $('#inputEmail').val()}),
// 				success: function(data){
// 					if (data && data.indexOf('На жаль, усе месцы на бліжэйшую экскурсію забраніраваны. Рэгістрацыя на наступную экскурсію, якая адбудзецца 26.08.2017, , плануецца ўв блIжэйшы час. Колькасць месцаў абмежавана!') !== -1) {
// 						$('#text-5').html(data);
// 						$('#text-5-block form').remove()
// 					} else if (data && data.indexOf("<font size='1'>") !== -1) {
// 						$('#text-5').text('Что-то пошло не так, попробуйте перезагрузіть страніцу і зарегістріроваться еще раз');
// 				  } else {
// 						$('#text-5').text('Віншуем! Ваша рэгістрація прайшла паспяхова. Чакайце запрашэнне на электронную пошту.');
// 						$('#text-5-block form').remove();
// 					}
// 				}
// 			});
// 	} else {
// 		evt.preventDefault();
// 	}
// })

$('.form-field').on('blur', function () {
	var heightBlock = $('#header-5').height() +
										parseInt($('#header-5').css("margin-bottom").split('p')[0]) +
										$('#text-5').height() +
										$('#button-5').height() +
										$('form').height() +
										parseInt($('#text-5-block').css("padding-top").split('p')[0]) +
										parseInt($('#text-5-block').css("padding-bottom").split('p')[0]) +
										parseInt($('#header-5').css("margin-bottom").split('p')[0]) +
										parseInt($('#text-5').css("margin-bottom").split('p')[0]);
	$('#text-5-wrapper').css('height', heightBlock);
	$('#text-5-wrapper').css('min-height', heightBlock);
})
