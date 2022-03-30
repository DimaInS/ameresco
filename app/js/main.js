$(function() {

    $('.products-popular__btn').on('click', function(){
          $('.products-popular__btn').removeClass('products-popular__btn--active');
          $(this).addClass('products-popular__btn--active');
        });


    $('.products-popular__btn-list').on('click', function(){
      $('.products-popular__bottom').addClass('products-popular__bottom--nogrid');
      $('.products-popular__item').addClass('products-popular__item--list');
    });

    $('.products-popular__btn-grid').on('click', function(){
      $('.products-popular__bottom').removeClass('products-popular__bottom--nogrid');
      $('.products-popular__item').removeClass('products-popular__item--list');
    });

   $('.descr-card__input').styler();

  $('.top-slider__items').slick({
    arrows: false,
    dots: true,
    fade: true,
    appendDots: $('.reviws__dots')
  })


});