"use strict";
// alert("hello");

// const vshowbox = window.vShowBox.init();
//очистка формы отзыва
$(".comments-form__btn").click(function () {
  $("form")[0].reset();
});
$(".footer__btn").click(function () {
  $(".footer__input")[0].reset();
});
//табы
$(function () {
  $(".tabs__top-link").on("click", function (e) {
    e.preventDefault();
    $(".tabs__top-link").removeClass("tabs__top-link--active");
    $(this).addClass("tabs__top-link--active");
    $(".tabs__content-item").removeClass("tabs__content-item--active");
    $($(this).attr("href")).addClass("tabs__content-item--active");
  });
});
//стилизация инпута выбора колличестава товара
$(".product__order-num").styler();

$(function () {
  //рейтинг
  $(".product__star, .comments__star").rateYo({
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#ffb800",
    spacing: "6px",
    readOnly: true,
    starSvg:
      "<svg>" +
      '<use xlink:href="img/svg/stack/sprite.svg#icon-star"></use>' +
      "</svg>",
  });
  //поставить оценку
  $("#star").rateYo({
    maxValue: 1,
    numStars: 5,
    fullStar: true,
    starWidth: "16px",
    normalFill: "#c1c1c1",
    ratedFill: "#ffb800",
    spacing: "6px",
    starSvg:
      "<svg>" +
      '<use xlink:href="img/svg/stack/sprite.svg#icon-star"></use>' +
      "</svg>",
  });
});

//добавление класса .active filter-top  стилизация и взоимодейстие в фильтрами топ
//фитльтры топа
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
    responsive: [
      {
        breakpoint: 10000000000,
        settings: "unslick",
      },
      {
        breakpoint: 962,
        settings: "slick",
      },
    ],
  });
  //слайдер отзывов reviews
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
      '<button type="button" class="interes-food__arrow interes-food__arrow-prev"><svg class="interes-food__arrow-icon"><use xlink:href="img/svg/stack/sprite.svg#icon-left"></use></svg></button >',
    nextArrow:
      '<button type="button" class="interes-food__arrow interes-food__arrow-next"><svg class="interes-food__arrow-icon"><use xlink:href="img/svg/stack/sprite.svg#icon-slid-right"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 962,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 787,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
          // centerMode: true,
          // variableWidth: true,
        },
      },
    ],
  });
  //слайдер секции product
  // $(".product__slide").slick({
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   // autoplay: true,
  //   autoplaySpeed: 3000,
  //   prevArrow:
  //     '<button type="button" class="product__slide-arrow product__slide-arrow-prev">' +
  //     '<svg class="product__slide-icon" width="18.7" height="31.55">' +
  //     '<use xlink:href="img/svg/stack/sprite.svg#icon-arrow-left"></use>' +
  //     "</svg>" +
  //     "</button>",
  //   nextArrow:
  //     '<button type="button" class="product__slide-arrow product__slide-arrow-next">' +
  //     '<svg class="product__slide-icon" width="18.7" height="31.55">' +
  //     '<use xlink:href="img/svg/stack/sprite.svg#icon-arrow-right"></use>' +
  //     "</svg>" +
  //     "</button>",
  //   responsive: [
  //     {
  //       breakpoint: 787,
  //       settings: {
  //         arrows: false,
  //       },
  //     },
  //   ],
  // });
  // $(".product__slide-item").click(function () {
  //   $(".product__slide").fadeIn();
  //   $(".product__slide").slick({
  //     slidesToShow: 1,
  //     dots: true,
  //     arrows: true,
  //   });
  // });
  //слайдер дисконт
  $(".discount__list").slick({
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 10000000000,
        settings: "unslick",
      },
      {
        breakpoint: 1130,
        settings: "slick",
        // dots: true,
      },
    ],
  });

  //modal slide
  $(".product__item-img").click(function () {});
  $(".product__item-img").on("click", function () {
    $(".product__modal").addClass("product__modal--active");
    $(".product__modal").fadeIn();
    $(".product__modal-list").slick({
      dots: true,
      arrows: true,
      prevArrow:
        '<button type="button" class="product__modal-arrow product__modal-arrow-prev"><svg class="product__modal-arrow-icon"><use xlink:href="img/svg/stack/sprite.svg#icon-arrow-left"></use></svg></button >',
      nextArrow:
        '<button type="button" class="product__modal-arrow product__modal-arrow-next"><svg class="product__modal-arrow-icon"><use xlink:href="img/svg/stack/sprite.svg#icon-arrow-right"></use></svg></button>',
    });
    $("body").addClass("modal__lock");
  });

  $(".product__modal-btn").on("click", function () {
    $(".product__modal").removeClass("product__modal--active");
    $("body").removeClass("modal__lock");
  });

  //фильтр продуктов
  var containerEl = document.querySelector(".popular-food");
  var mixer = mixitup(containerEl);
});
