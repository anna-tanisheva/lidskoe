'use strict';
if ($(window).innerWidth() < 960) {
  $('.container').attr('id', 'container-m');
  $('.check').attr('id', 'check-m');
}
//cookie для главной страніцы
function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}
// function redirect () {
//   if (document.cookie.indexOf('answer=yes') === -1 && document.cookie.indexOf('answer=no') === -1) {
//     return;
//   } else if (document.cookie.indexOf('answer=no') !== -1) {
//     location.href = 'pivo-ne-shutki.html';
//   } else if (document.cookie.indexOf('answer=yes') !== -1) {
//     location.href = 'main-page.html';
//   }
// }
//проверка кукі прі загрузке і редірект, в случае іх налічія
$(window).on('load', function (evt) {
  // redirect ()
  if (document.cookie.indexOf('answer=yes') === -1 && document.cookie.indexOf('answer=no') === -1) {
    return;
  } else if (document.cookie.indexOf('answer=no') !== -1) {
    location.href = 'pivo-ne-shutki.html';
  } else if (document.cookie.indexOf('answer=yes') !== -1) {
    location.href = 'main-page.html';
  }
})

//запісь в кукі по кліку на ссылку
$('.btn-check-age').on('click', function (evt) {
  evt.preventDefault();
  if (document.cookie.indexOf('answer=yes') === -1 && document.cookie.indexOf('answer=no') === -1 && evt.target.getAttribute('data-value') === 'yes') {
    setCookie('answer', evt.target.getAttribute('data-value'), {
      expires: 3600,
    } )
    location.href = 'main-page.html'
  } else if (document.cookie.indexOf('answer=yes') === -1 && document.cookie.indexOf('answer=no') === -1 && evt.target.getAttribute('data-value') === 'no') {
    setCookie('answer', evt.target.getAttribute('data-value'), {
      expires: 3600,
    } )
    location.href = 'pivo-ne-shutki.html'
  }
  else {
    var lastAnswer = document.cookie.split(';')[0];
    if (lastAnswer === 'answer=yes') {
      location.href = 'main-page.html'
    } else if (lastAnswer === 'answer=no') {
      location.href = 'pivo-ne-shutki.html'
    } else {
      setCookie('answer', evt.target.getAttribute('data-value'), {
        expires: 3600,
      } )
    }
  }
})
