"use strict";
// alert("hello");
$(document).ready(function () {
  $(window).scroll(function () {
    //липкая шапка
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 57) {
      $("body").addClass("header-fixed");
    } else {
      $("body").removeClass("header-fixed");
    }
  });
});
$(function () {
  //слайдер ресторанов
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
  //слайдер популярны продуктов
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
  //бургер меню
  $(".burger").on("click", function () {
    $(".burger-menu").addClass("burger-menu__active");
    $("body").addClass("lock");
  });
  $(".burger-menu__close").on("click", function () {
    $(".burger-menu").removeClass("burger-menu__active");
    $("body").removeClass("lock");
  });
  //фильтр продуктов
  var containerEl = document.querySelector(".popular-food");
  var mixer = mixitup(containerEl);
});
