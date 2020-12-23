$(document).ready(function () {
  $(".home__bigslider-wrapp").slick({
    dots: true,
    slidesToShow: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  
  $(".home__instashop-slider").slick({
    slidesToShow: 1,
    arrows: false,
    dots:true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".home__comments-slider").slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        },
      },
    ],
  });

  $(".home__blog-slider").slick({
    slidesToShow: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 501,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  });

  $(".product__wrap-slider").slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          vertical: false,
          verticalSwiping: false,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".product__previews-slider").slick({
    slidesToShow: 1,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $(".product__previews-slider").slick("setPosition");
  });

  $("#previews").on("shown.bs.collapse", function (e) {
    $(".product__previews-slider").slick("setPosition");
  });

  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $(".product__viewed-slider").slick("setPosition");
  });

  $(".product__viewed-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 1706,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true,
        },
      },
    ],
  });

  $(".product__slider-items img").on("click", function () {
    var newSrc = $(this).attr("src");
    $("#product-img").attr("src", newSrc);
  });
});
