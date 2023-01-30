"use strict";
// alert("hello");
//прайс рандж
$(function () {
  var $range = $(".filter-price__range"),
    $inputFrom = $(".filter-price__input-from"),
    $inputTo = $(".filter-price__input-to"),
    instance,
    min = 0,
    max = 1200,
    from = 0,
    to = 0;
  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val,
    });
  });

  $inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val,
    });
  });
});
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
//липкие хлебные крошки
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 57) {
      $("body").addClass("breadcrumbs-fixed");
    } else {
      $("body").removeClass("breadcrumbs-fixed");
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
        breakpoint: 962,
        settings: "slick",
      },
    ],
  });
  //слайдер дискаунт
  $(".discount__list").slick({
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
        breakpoint: 962,
        settings: "slick",
      },
    ],
  });
  //слайдер отзывов
  $(".reviews-slider").slick({
    dots: true,
    arrows: true,
    // autoplay: true,
    autoplaySpeed: 6000,
    prevArrow:
      '<button type="button" class="slick-arrow__prev"><svg class="slick-arrow__icon"><use xlink:href="img/svg/stack/sprite.svg#icon-prev-arrow"></use></svg></button >',
    nextArrow:
      '<button type="button" class="slick-arrow__next"><svg class="slick-arrow__icon"><use xlink:href="img/svg/stack/sprite.svg#icon-prev-arrow"></use></svg></button>',
    responsive: [
      {
        breakpoint: 787,
        settings: {
          dots: false,
        },
      },
    ],
  });
  //слайдер секции interes
  $(".interes-food__slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:
      '<button type="button" class="slick-arrow__prev"><svg class="slick-arrow__icon"><use xlink:href="img/svg/stack/sprite.svg#icon-prev-arrow"></use></svg></button >',
    nextArrow:
      '<button type="button" class="slick-arrow__next"><svg class="slick-arrow__icon"><use xlink:href="img/svg/stack/sprite.svg#icon-prev-arrow"></use></svg></button>',
  });
  //фильтр продуктов
  var containerEl = document.querySelector(".popular-food");
  var mixer = mixitup(containerEl);
});

// //каталог топ фильтр
// $(".filter-select__title").on("click", function () {
//   $(this).siblings().slideToggle();
//   // $(this).toggleClass("filter-select__arrow-down");
// });
// //каталог топ фильтр
// $(".filter-number__title").on("click", function () {
//   $(this).siblings().slideToggle();
//   // $(this).toggleClass("filter-select__arrow-down");
// });
//стилизация  выпадающих списков
// $(".filter-selects__style").styler();

// $(".filter-selects__btn").on("click", function () {
//   $(".filter-selects__btn").toggleClass("filter-selects__btn-down");
//   $(".filter-selects__list").toggleClass("filter-selects__list-open");
//   $(".filter-selects__choice").toggleClass("filter-selects__choice-open");
// });
// $(".filter-selects__btn-down").on("click", function () {
//   $(".filter-selects__btn").removeClass(".filter-selects__btn-down");
//   $(".filter-selects__list").removeClass(".filter-selects__list-open");
//   $(".filter-selects__choice").removeClass(".filter-selects__choice-open");
// });
