"use strict";
// alert("hello");

//очистка  формы
// $(".footer__btn").click(function () {
//   $("input")[0].reset();
// });

//добавление класса .active filter-top  стилизация и взоимодейстие в фильтрами топ
$(".filter-select").click(function () {
  $(this).toggleClass("filter-select--active");
});
$(".filter-number").click(function () {
  $(this).toggleClass("filter-number--active");
});
$(".filter-select").each(function () {
  $(this).children("select").css("display", "none");
  var $current = $(this);
  $(this)
    .find("option")
    .each(function (i) {
      if (i == 0) {
        $current.prepend(
          $("<div>", {
            class: $current
              .attr("class")
              .replace(/filter-select/g, "filter-select__box"),
          })
        );

        var placeholder = $(this).text();
        $current.prepend(
          $("<span>", {
            class: $current
              .attr("class")
              .replace(/filter-select/g, "filter-select__placeholder"),
            text: placeholder,
            "data-placeholder": placeholder,
          })
        );

        return;
      }

      $current.children("div").append(
        $("<span>", {
          class: $current
            .attr("class")
            .replace(/filter-select/g, "filter-select__options"),
          text: $(this).text(),
        })
      );
    });
});
$(".filter-number").each(function () {
  $(this).children("select").css("display", "none");
  var $current = $(this);
  $(this)
    .find("option")
    .each(function (i) {
      if (i == 0) {
        $current.prepend(
          $("<div>", {
            class: $current
              .attr("class")
              .replace(/filter-number/g, "filter-number__box"),
          })
        );

        var placeholder = $(this).text();
        $current.prepend(
          $("<span>", {
            class: $current
              .attr("class")
              .replace(/filter-number/g, "filter-number__placeholder"),
            text: placeholder,
            "data-placeholder": placeholder,
          })
        );

        return;
      }

      $current.children("div").append(
        $("<span>", {
          class: $current
            .attr("class")
            .replace(/filter-number/g, "filter-number__options"),
          text: $(this).text(),
        })
      );
    });
});
$(".filter-select__options").click(function () {
  var txt = $(this).text();
  var index = $(this).index();

  $(this).siblings(".filter-select__options").removeClass("selected");
  $(this).addClass("selected");

  var $currentSel = $(this).closest(".filter-select");
  $currentSel.children(".filter-select__placeholder").text(txt);
  $currentSel.children("select").prop("selectedIndex", index + 1);
});
$(".filter-number__options").click(function () {
  var txt = $(this).text();
  var index = $(this).index();

  $(this).siblings(".filter-number__options").removeClass("selected");
  $(this).addClass("selected");

  var $currentSel = $(this).closest(".filter-number");
  $currentSel.children(".filter-number__placeholder").text(txt);
  $currentSel.children("select").prop("selectedIndex", index + 1);
});
// --------------------------------------------------------------------------
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
  // кнопка фильтров добавление/удаление класса active
  $(".catalog__filter-btn").on("click", function () {
    $(".filter").toggleClass("filter--active");
  });
  $(".filter__btn").on("click", function () {
    $(".filter").removeClass("filter--active");
  });
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
