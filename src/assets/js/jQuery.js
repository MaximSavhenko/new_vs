$(document).ready(function () {
  $(".home__information-btn").click(function () {
    $(this).toggleClass("active");
  });

  $(".product__responsive-title").click(function () {
    $(".product__responsive-title").not(this).removeClass('activeArrow');
    $(this).toggleClass("activeArrow");
  });

});
