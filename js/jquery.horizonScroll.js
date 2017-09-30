/**
 * HorizonScroll
 * Version: 1.1.0
 * URL: https://github.com/trgraglia/jquery.horizonScroll.js/
 * Description: This is a jQuery plugin which allows for websites to scroll left and right.
 * Requires: jQuery 1.10.2
 * Optional: jQuery TouchSwipe (http://labs.rampinteractive.co.uk/touchSwipe/)
 * Author: Anthony Graglia
 * Copyright: Copyright 2013 Anthony Graglia
 * License: MIT License
 */

// Semicolon to prevent breakage with concatenation.
;
(function ($) {
    // 'use strict';
    var scrollIndex = 0;
    var scrollIndex2 = 0;
    var l = 0;
    $.fn.horizon = function (options, i) {
        if (options === 'scrollLeft') {
            scrollLeft();
        } else if (options === 'scrollRight') {
            scrollRight();
        } else if (options === 'scrollTo') {
            if (isNumeric(i)) {
                scrollTo(+i, $.fn.horizon.defaults.scrollDuration);
            } else {
                scrollToId(i, $.fn.horizon.defaults.scrollDuration);
            }
        } else {
            $.extend($.fn.horizon.defaults, options);

            $.fn.horizon.defaults.sections = this;
            $.fn.horizon.defaults.limit = this.length;
            $.fn.horizon.defaults.i = 0;

            sizeSections();

            $(document).on('mousewheel DOMMouseScroll', function (e) {
                // Equalize event object.
                var evt = window.event || e;
                // Convert to originalEvent if possible.
                evt = evt.originalEvent ? evt.originalEvent : evt;
                // Check for detail first, because it is used by Opera and FF.
                var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;

                scrollAction(delta);
            }).on('click', '.horizon-next', function () {

                scrollRight();
            }).on('click', '.horizon-prev', function () {
                scrollLeft();
            }).on('click', 'a[href^="#"]', function () {
                var hash = $(this).attr('href');
                if (-1 < hash.indexOf('#')) {
                    scrollToId(hash.split('#')[1], $.fn.horizon.defaults.scrollDuration);
                }
            });

            if ($.fn.horizon.defaults.swipe) {
                $(document).swipe({
                    // Generic swipe handler for all directions.
                    swipe: function (event, direction, distance, duration, fingerCount) {
                        if (scrolls[direction]) {
                            scrolls[direction]();
                        }
                    },
                    /*click: function (event, target) {
                     event.preventDefault();
                     event.stopPropagation();
                     event.stopImmediatePropagation();

                     //$(target).click();
                     },
                     tap: function (event, target) {
                     event.preventDefault();
                     event.stopPropagation();
                     event.stopImmediatePropagation();

                     $(target).click();
                     },*/
                    // Default is 75px, set to 0 for demo so any distance triggers swipe
                    threshold: 75
                });
            }

            $(window).on('resize', function () {
                sizeSections();
            }).on('keydown', function (e) {
                if (scrolls[e.which]) {
                    scrolls[e.which]();
                    e.preventDefault();
                }
            });

            return this;
        }
    };



    $.fn.horizon.defaults = {
        scrollTimeout: null,
        scrollEndDelay: 10000,
        scrollDuration: 8000,
        i: 0,
        limit: 0,
        docWidth: 0,
        sections: null,
        swipe: true,
        fnCallback: function (i) {
            //обрабочик ссылок на кнопки 'далей'



            $('.btn').on('click', function (evt) {
                if(evt.target.getAttribute('id') === 'button-1') {
                    scrollTo(1, 8000);
                    hideContentDiv(1);
                    setTimeout(function () {
                      showContentDiv2();
                    }, 9000)
                } else if (evt.target.getAttribute('id') === 'button-2') {
                    showContentDiv3();
                    hideContentDiv(2);
                } else if (evt.target.getAttribute('id') === 'button-3') {
                    scrollTo(2, 8000);
                    hideContentDiv(3);
                    setTimeout (function () {
                      showContentDiv4();
                    }, 9000)
                } else if (evt.target.getAttribute('id') === 'button-4') {
                    showContentDiv5();
                    hideContentDiv(4);
                }
            });
            //анимация горизонтального движения бутылки

            if(i === 0) {
                var moveBottleTl = new TimelineLite();
                moveBottleTl.to($('.bottle'), 10, {css: {left: '52%'}, ease: Power2.easeInOut})
                .to($('.text-block'), 0, {css: {'z-index': '6'}}, 0)
                .to($('.logo'), 0, {css: {'z-index': '6'}}, 0)
                .to($('#logo-1-wrapper'), 0, {css: {'z-index': '30'}}, '-=10')
                .to($('#logo-1'), 0, {css: {'z-index': '30'}}, '-=10')
            } else if (i === 1) {
                function setZIndex() {
                    $('#text-2-block, #text-3-block').css('z-index', '30');
                    $('#logo-2-wrapper, #logo-3-wrapper').css('z-index', '31');
                    $('#logo-2, #logo-3').css('z-index', '31');
                }
                var moveBottleTl = new TimelineLite();
                moveBottleTl.to($('.bottle'), 8 , {css: {left: '22%'}, ease: Power2.easeInOut, onComplete: setZIndex}, 1)
                moveBottleTl.to($('.logo-wrapper'), 0, {css: {'z-index': '6'}}, 0)
                moveBottleTl.to($('.logo'), 0, {css: {'z-index': '6'}}, 0)
                .to($('.text-block'), 0, {css: {'z-index': '6'}}, 0)
                if (scrollIndex < 3) {
                  moveBottleTl.fromTo($('#logo-2-wrapper'), 2, {opacity: 0}, {opacity: 1}, 4)
                  moveBottleTl.fromTo($('#logo-3-wrapper'), 2, {opacity: 0}, {opacity: 1, onComplete: setZIndex}, 6 );
                  scrollIndex = 0;
                }
                // moveBottleTl.to($('.text-block'), 0, {css: {'z-index': '30'}});
            } else if (i === 2) {
                var moveBottleTl = new TimelineLite();
                moveBottleTl.to($('.bottle'), 8, {css: {left: '-10%'}, ease: Power2.easeInOut}, 1)
                moveBottleTl.to($('.logo'), 0, {css: {'z-index': '6'}}, 0)
                .to($('#logo-2-wrapper'), 0, {css: {'z-index': '6'}}, 0)
                .to($('#logo-3-wrapper'), 0, {css: {'z-index': '6'}}, 0)
                .to($('.text-block'), 0, {css: {'z-index': '6'}}, 0)
                .to($('.logo'), 0, {css: {'z-index': '30'}})
                .to($('.logo-wrapper'), 0, {css: {'z-index': '30'}})
                if (scrollIndex2 <= 3) {
                  if (scrollIndex2 != 0) {
                    moveBottleTl.fromTo($('#logo-4-wrapper'), 2, {opacity: 0}, {opacity: 1}, 4)
                    moveBottleTl.fromTo($('#logo-5-wrapper'), 2, {opacity: 0}, {opacity: 1}, 6);
                    scrollIndex2 = 0;
                  }
                }
                moveBottleTl.to($('.text-block'), 0, {css: {'z-index': '30'}});
            }
            $('.horizon-prev,.horizon-next').on('click', function () {
              $('#logo-2-wrapper, #logo-2, #logo-2-text').css('z-index', 6);
              $('html,body').stop();
              moveBottleTl.kill();
              var scrollIndex2 = 0;

              if (scrollIndex === 3) {
                $('#logo-2-wrapper, #logo-3-wrapper').css('opacity', 1);
                $('#logo-4-wrapper, #logo-5-wrapper').css('opacity', 1);
              } else {

              }
            })

        }
    };

    function isNumeric(num) {
        return !isNaN(num)
    }

    function scrollToId(id, speed) {
        var i = -1;
        $.fn.horizon.defaults.sections.each(function (index, element) {
            if (id === $(this).attr('id')) {
                i = index;
            }
        });

        if (0 <= i) {
            scrollTo(i, $.fn.horizon.defaults.scrollDuration);
        }
    }

    // HTML animate does not work in webkit. BODY does not work in opera.
    // For animate, we must do both.
    // http://stackoverflow.com/questions/8790752/callback-of-animate-gets-called-twice-jquery
    var scrollTo = function (index, speed) {
        if (index > ($.fn.horizon.defaults.limit - 1) || index < 0) {
            return;
        }

        $.fn.horizon.defaults.i = index;

        var $section = $($.fn.horizon.defaults.sections[index]);
        $('html,body').animate({scrollLeft: $section.offset().left}, speed, 'swing', $.fn.horizon.defaults.fnCallback(index));



        if (index === 0) {
            $('.horizon-prev').hide();
            $('.horizon-next').show();
        } else if (index === $.fn.horizon.defaults.limit - 1) {
            $('.horizon-prev').show();
            $('.horizon-next').hide();

        } else {
            $('.horizon-next').show();
            $('.horizon-prev').show();

        }
    };

    var scrollLeft = function () {

        var i2 = $.fn.horizon.defaults.i - 1;

        if (i2 > -1) {
            scrollTo(i2, $.fn.horizon.defaults.scrollDuration);
        }
    };

    var scrollRight = function () {

        var i2 = $.fn.horizon.defaults.i + 1;

        if (i2 < $.fn.horizon.defaults.limit) {
            scrollTo(i2, $.fn.horizon.defaults.scrollDuration);
        }
        for (l; l < 3; l++) {
          scrollIndex = scrollIndex + 1;
          scrollIndex2 = scrollIndex2 + 1;
        }
    };

    // Executes on 'scrollbegin'.
    var scrollBeginHandler = function (delta) {
        // Scroll up, Scroll down.
        if (delta > 1) {
            scrollLeft();
        } else if (delta < -1) {
            scrollRight();
        }
    };

    // Executes on 'scrollend'.
    var scrollEndHandler = function () {
        $.fn.horizon.defaults.scrollTimeout = null;
    };

    var scrollAction = function (delta) {
        if ($.fn.horizon.defaults.scrollTimeout === null) {
            scrollBeginHandler(delta);
        } else {
            clearTimeout($.fn.horizon.defaults.scrollTimeout);
        }

        $.fn.horizon.defaults.scrollTimeout = setTimeout(scrollEndHandler, $.fn.horizon.defaults.scrollEndDelay);
    };

    var sizeSections = function () {
        var iInnerWidth = $(window).innerWidth();
        if (iInnerWidth >= 1100) {
          // Store window width and assign it to each panel or section.
          $.fn.horizon.defaults.docWidth = iInnerWidth;
          $.fn.horizon.defaults.sections.each(function () {
              $(this).width(iInnerWidth);
          });

          // Set the page to be a width large enough to include all panels.
          $('html').width($.fn.horizon.defaults.limit * iInnerWidth);

          // Scroll to current section without animation.
          scrollTo($.fn.horizon.defaults.i, 0);
        } else {
          iInnerWidth = 1100;
          $('.main-screen').css('height', '674px');
          // Store window width and assign it to each panel or section.
          $.fn.horizon.defaults.docWidth = iInnerWidth;
          $.fn.horizon.defaults.sections.each(function () {
              $(this).width(iInnerWidth);
          });

          // Set the page to be a width large enough to include all panels.
          $('html').width($.fn.horizon.defaults.limit * iInnerWidth);

          // Scroll to current section without animation.
          scrollTo($.fn.horizon.defaults.i, 0);
        }


    };

    var scrolls = {
        'right': scrollLeft,
        'down': scrollLeft,
        'left': scrollRight,
        'up': scrollRight,
        37: scrollLeft,
        38: scrollLeft,
        39: scrollRight,
        40: scrollRight
    };

    $( document ).ready(function () {
      scrollTo(0);

    })
})
(jQuery);
