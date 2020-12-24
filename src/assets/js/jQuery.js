$(document).ready(function () {
  $(".home__information-btn").click(function () {
    $(this).toggleClass("active");
  });

  $(".header__setting-items").click(function () {
    $(".header__setting-items").removeClass('arrow');
    $(this).addClass("arrow");
  });


  $(".product__responsive-title").click(function () {
    $(".product__responsive-title").not(this).removeClass('activeArrow');
    $(this).toggleClass("activeArrow");
  });

  
});
