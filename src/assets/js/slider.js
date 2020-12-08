$(document).ready(function(){
    $('.product__wrap-slider').slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 3,
      arrows: true
    });
  });

$(document).ready(function(){
    $('.product__previews-slider').slick({
      centerMode: true,
      slidesToShow: 1,
      arrows: true,
      infinite: false,
    });
  });

$(document).ready(function(){
    $('.product__viewed-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: !1
    });
  });