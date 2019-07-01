"use strict";

$(document).ready(function () {
  //initialize swiper when document ready
  var clientsSlider = new Swiper('.js-slider', {
    // Optional parameters
    slidesPerView: 4,
    navigation: {
      nextEl: '.js-btn-next',
      prevEl: '.js-btn-prev'
    },
    breakpoints: {
      // when window width is <= 320px
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      990: {
        slidesPerView: 3
      }
    },
    loop: true
  });
});