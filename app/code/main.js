/*
* @Author: Abrams
* @Date:   2017-04-28 22:36:59
* @Last Modified by:   Abrams
* @Last Modified time: 2017-04-30 22:40:45
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


});

