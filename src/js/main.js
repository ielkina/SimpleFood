"use strict";
$(function () {
  $(".restaurant__list").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 3800,
        settings: "unslick",
      },
      {
        breakpoint: 675,
        settings: "slick",
      },
    ],
  });
  $(".reviews-slider").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:
      '<button type="button" class="slick-arrow__prev"><svg class="slick-arrow__icon"><use xlink:href="img/svg/sprite.svg#icon-prev-arrow"></use></svg></button >',
    nextArrow:
      '<button type="button" class="slick-arrow__next"><svg class="slick-arrow__icon"><use xlink:href="img/svg/sprite.svg#icon-prev-arrow"></use></svg></button>',
  });
  var containerEl = document.querySelector(".popular-food");
  var mixer = mixitup(containerEl);
});
