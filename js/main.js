$(function () {

  $('.header-slider').slick({
    arrows: false,
    vertical: true,
    autoplay: true,
    dots: true,
    dotsClass: 'header-dots',
    autoplaySpeed: 3000,
  });

  $('.main-nav__btn').on('click', function () {
    $('.main-nav__list').slideToggle();
  });

});