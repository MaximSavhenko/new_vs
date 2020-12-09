$(document).ready(function(){
    $('.product__wrap-slider').slick({
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
            dots: true
          }
        },
      ]
    });

    

    $('.product__previews-slider').slick({
      slidesToShow: 1,
      arrows: true,
      infinite: false,
    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $('.product__previews-slider').slick('setPosition');
    });

    $('.product__viewed-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 1706,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true
          }
        },
      ]
    });
    
    $(".product__slider-items img").on("click", function () {
      var newSrc = $(this).attr("src");
      $("#product-img").attr("src", newSrc);
    });
    
});
