"use strict";
// alert("hello");

//липкая шапка
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 57) {
      $("body").addClass("header-fixed");
    } else {
      $("body").removeClass("header-fixed");
    }
  });
});

//бургер меню
$(".burger").on("click", function () {
  $(".burger-menu").addClass("burger-menu--active");
  $("body").addClass("lock");
});
$(".burger-menu__close").on("click", function () {
  $(".burger-menu").removeClass("burger-menu--active");
  $("body").removeClass("lock");
});


$(function () {
  //слайдер ресторанов
  $(".restaurant__list").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 3800,
        settings: "unslick",
      },
      {
        breakpoint: 807,
        settings: "slick",
      },
    ],
  });
  //слайдер отзывов
  $(".reviews-slider").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow:
      '<button type="button" class="slick-arrow__prev"><svg class="slick-arrow__icon"><use xlink:href="img/svg/stack/sprite.svg#icon-prev-arrow"></use></svg></button >',
    nextArrow:
      '<button type="button" class="slick-arrow__next"><svg class="slick-arrow__icon"><use xlink:href="img/svg/stack/sprite.svg#icon-prev-arrow"></use></svg></button>',
  });

  //фильтр продуктов
  var containerEl = document.querySelector(".popular-food");
  var mixer = mixitup(containerEl);
});