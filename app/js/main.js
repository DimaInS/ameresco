$(function() {
    $('.products-popular__btn').on('click', function(){
      $('.products-popular__btn').removeClass('products-popular__btn--active')
      $(this).addClass('products-popular__btn--active')
    });

   $('.descr-card__input').styler();

  $('.top-slider__items').slick({
    arrows: false,
    dots: true,
    fade: true,
    appendDots: $('.reviws__dots')
  })


});