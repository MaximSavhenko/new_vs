$(document).ready(function () {
  $(".home__information-btn").click(function () {
    $(this).toggleClass("active");
  });

  $(".header__setting-items").click(function () {
    $(".header__setting-items").removeClass('arrow');
    $(this).addClass("arrow");
  });

  
});
