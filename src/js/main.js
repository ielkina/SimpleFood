$(function () {
  $('.reviews-slider').slick({
    dots: true,
    // autoplay: true,
    // fade: true,
    autoplaySpeed: 6000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-prev__icon" style="width: 34px; height: 34px;"><use class="slick-prev__icon-use" xlink:href="img/icons/sprite.svg#icon-prev-arrow"></use></svg></button >',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-next__icon" style="width: 34px; height: 34px;"><use class="slick-next__icon-use" xlink:href="img/icons/sprite.svg#icon-next-arrow"></use></svg></button>'
  });

  var containerEl = document.querySelector('.popular-food');
  var mixer = mixitup(containerEl);

})