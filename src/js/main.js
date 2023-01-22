"use strict";
$(function () {
  $(".reviews-slider").slick({
    dots: true,
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-arrow__prev"><svg class="slick-arrow__icon"><use xlink:href="img/svg/sprite.svg#icon-prev-arrow"></use></svg></button >',
    nextArrow:
      '<button type="button" class="slick-arrow__next"><svg class="slick-arrow__icon"><use xlink:href="img/svg/sprite.svg#icon-prev-arrow"></use></svg></button>',
  });
  // var mixer = mixitup(".popular__filter");
    var containerEl = document.querySelector(".popular-food");
    var mixer = mixitup(containerEl);
});
