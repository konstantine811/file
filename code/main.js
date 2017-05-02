/*
* @Author: Abrams
* @Date:   2017-04-28 22:36:59
* @Last Modified by:   Admin
* @Last Modified time: 2017-05-01 15:23:58
*/

'use strict';




$(document).ready(function() {

$('.coaches_sld').slick({
	dots: true,
	 slidesToShow: 3,
  slidesToScroll: 1
});

$('.window_slide').slick({
	slidesToShow: 1,
  	slidesToScroll: 1,
  	cssEase: 'ease-in',
});

$('figure.one').slick({
	slidesToShow: 1,
  	slidesToScroll: 1,
  	cssEase: 'ease-in',
});

 $('.viewport').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'ease-in-out',
  arrows: true,
  fade: false,
  dots: true,
  asNavFor: '.select-img'
});
$('.select-img').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.viewport',
  cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  dots: true,
  centerMode: false,
  focusOnSelect: true
});


});

