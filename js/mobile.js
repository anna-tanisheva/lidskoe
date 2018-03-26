'use strict';
//set height of container
// var deviceHeight = screen.height;
var deviceHeight = $(window).innerHeight();
// console.log($(window).innerHeight())
$(window).on('load', function () {
  $('.mobile-wrapper').height(deviceHeight*5);
});
$(window).resize(function () {
  $('.mobile-wrapper').height(deviceHeight*5);
});
var iconWidthMobile = getComputedStyle(document.querySelector('.mobile-social-bar')).width;
$('.social-link-mobile').css('height', iconWidthMobile);

// $('#main-section-5').height(deviceHeight + 20 * deviceHeight / 100);

//set height next, prev
$(window).on('load', function () {
  var arrowWidth = $('#next-1').width();
  $('.next, .prev').height(arrowWidth);
});
$(window).resize(function () {
  var arrowWidth = $('#next-1').width();
  $('.next, .prev').height(arrowWidth);
});

//dynemic height of icons
var iconWidth = $('.mobile-logo-wrapper').width();
$('.mobile-logo-wrapper').height(iconWidth)

//обрботчік кліка на іконку
$('.mobile-logo-wrapper').on('click', function (evt) {
  var logo = evt.target;
  var numberLogo = logo.getAttribute('id').split('-')[3]

  // if (numberLogo === '5') {
  //   location.href = 'mobile.html#main-section-5';
  //   $('#mobile-text-wrapper-' + numberLogo).removeClass('hide');
  //   $('.mobile-main-logo, .disclamer').addClass('hide');
  //   $('#mobile-logo-' + numberLogo + '-wrapper').addClass('hide');
  //   var logoWidth = $('#mobile-logo-' + numberLogo + '-wrapper').width();
  //   $('#mobile-logo-' + numberLogo + '-wrapper').css('margin-left', - logoWidth / 2);
  //   $('.mobile-text-wrapper').css('padding-top', '12%');
  //
  //   $('body').addClass('overflow-hidden');
  // } else {
  //   location.href = 'mobile.html#main-section-' + numberLogo;
  //   $('#mobile-text-wrapper-' + numberLogo).removeClass('hide');
  //   $('.mobile-main-logo, .disclamer').addClass('hide');
  //   $('#mobile-logo-' + numberLogo + '-wrapper').addClass('icon-position-top');
  //   var logoWidth = $('#mobile-logo-' + numberLogo + '-wrapper').width();
  //   $('#mobile-logo-' + numberLogo + '-wrapper').css('margin-left', - logoWidth / 2);
  //   $('body').addClass('overflow-hidden');
  // }


    location.href = 'mobile.html#main-section-' + numberLogo;
    $('#mobile-text-wrapper-' + numberLogo).removeClass('hide');
    $('.mobile-main-logo, .disclamer').addClass('hide');
    $('#mobile-logo-' + numberLogo + '-wrapper').addClass('icon-position-top');
    // $('#mobile-logo-' + numberLogo + '-wrapper').css('position', 'relative');
    // $('#mobile-logo-' + numberLogo).css('position', 'relative');
    // $('#mobile-logo-layer-' + numberLogo).css('position', 'relative');
    var logoWidth = $('#mobile-logo-' + numberLogo + '-wrapper').width();
    $('#mobile-logo-' + numberLogo + '-wrapper').css('margin-left', - logoWidth / 2);
    $('body').addClass('overflow-hidden');
    $('#main-section-' + numberLogo).css('background-image', 'url(img/bg-layer.png)');
    $('#main-section-' + numberLogo).addClass('change-bg');
    $('#main-section-' + numberLogo).addClass('overflow-auto');
    if ('#main-section-' + numberLogo === '#main-section-5') {
      $('#mobile-text-wrapper-5').css('outline', 'none')
    }

});

//обработчік на кнопку далей
$('.mobile-btn').on('click', function (evt) {
  var button = evt.target;
  var numberButton = button.getAttribute('id').split('-')[2];
  $('.mobile-main-logo, .disclamer').removeClass('hide');
  $('#mobile-text-wrapper-' + numberButton).addClass('hide');
  $('#mobile-logo-' + numberButton + '-wrapper').removeClass('icon-position-top');
  $('#mobile-logo-' + numberButton + '-wrapper').css('margin-left', 0);
  $('body').removeClass('overflow-hidden');
  $('#main-section-' + numberButton).removeClass('overflow-auto').removeClass('change-bg');
  $('#main-section-' + numberButton).css('background-image', 'url(img/mobile-main-bg-' + numberButton + '.jpg)');
});

// //увелічіваем высоту формы с ошібкамі
// $('.form-field').on('blur', function () {
//   if ($('.form-group').hasClass('has-error') ||
//       $('.form-group').hasClass('has-danger')) {
//         $('#mobile-text-wrapper-5').height(deviceHeight + 5)
//       }
// })
$('.form-button').on('mouseover', function () {
  if ($('.form-group').hasClass('has-error') ||
      $('.form-group').hasClass('has-danger')) {
        $('#mobile-text-wrapper-5').height(deviceHeight + 5)
      }
})
// прячем плашку прі скролле
// $(window).scroll(function () {
//   $('.mobile-main-logo, .disclamer').removeClass('hide');
//   $('#mobile-text-wrapper-' + numberButton).addClass('hide');
//   $('#mobile-logo-wrapper').removeClass('icon-position-top');
//   $('#mobile-logo--wrapper').css('margin-left', 0);
// })

//показываем ссылкі на соц-сеті
function hideSocial () {
  $('.social-wrapper').slideUp('slow');
  $('.toggle-social').on('click', showSocial);
}
function showSocial () {
  $('.social-wrapper').slideDown('slow');
  $('.toggle-social').off('click', showSocial);
  $('.toggle-social').on('click', hideSocial);
}
$('.toggle-social').on('click', showSocial);

//закрываем текстовые блокі
$('.close-button').on('click', function(evt) {
  var button = evt.target;
  var numberButton = button.getAttribute('id').split('-')[2];
  $('.mobile-main-logo, .disclamer').removeClass('hide');
  $('#mobile-text-wrapper-' + numberButton).addClass('hide');
  $('#mobile-logo-' + numberButton + '-wrapper').removeClass('icon-position-top');
  $('#mobile-logo-' + numberButton + '-wrapper').css('margin-left', 0);
  $('body').removeClass('overflow-hidden');
  $('#main-section-' + numberButton).css('background-image', 'url(img/mobile-main-bg-' + numberButton + '.jpg)');
  $('#main-section-' + numberButton).removeClass('change-bg');

})

//обработка формы

// $(window).on('load', function () {
// 	$.ajax ({
// 		url: './data.php',
// 		type: 'GET',
// 		success: function(data){
// 			if (data && data.indexOf('На жаль, усе месцы на бліжэйшую экскурсію забраніраваны.') !== -1) {
//         $('#mobile-text-5').html(data);
//         $('#mobile-text-wrapper-5 form').remove()
// 			} else {
// 				return;
// 			}
// 		}
// 	});
// })
//
// $('.form-button').on('click', function (evt) {
// 	evt.preventDefault();
// 	if (!$('.form-group').hasClass('has-danger') &&
// 	 !$('.form-group').hasClass('has-error') &&
// 	  $('.form-field').val() !== '') {
// 			$.ajax ({
// 				url: './data.php',
// 				type: 'POST',
// 				data: ({name: $('#inputName').val(),
// 								phone: $('#phone').val(),
// 							email: $('#inputEmail').val()}),
// 				success: function(data){
// 					if (data) {
// 						$('#mobile-text-5').html(data);
// 						$('#mobile-text-wrapper-5 form').remove()
// 					} else {
// 						$('#mobile-text-5').text('Віншуем! Ваша рэгістрація прайшла паспяхова. Чакайце запрашэнне на электронную пошту.');
// 						$('form').remove();
// 					}
// 				}
// 			});
// 	} else {
// 		$('#text-5').text('Проізошла какая-то ошібка');
// 	}
// })
