$(document).ready(function () {
  $(".home__information-btn").click(function () {
    $(this).toggleClass("active");
  });

  $("#active-360").click(function () {
    $(".product__slider-review").addClass("active");
  });
  
  $("#close-360").click(function () {
    $(".product__slider-review").removeClass('active');
  });

  $(".product__responsive-title").click(function () {
    $(".product__responsive-title").not(this).removeClass('activeArrow');
    $(this).toggleClass("activeArrow");
  });

});
