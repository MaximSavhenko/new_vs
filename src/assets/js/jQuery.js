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

  $("#basket").click(function () {
    $(".basket").addClass('active');
  });
  
  $(".basket__close").click(function () {
    $(".basket").removeClass('active');
  });

  $("#search").click(function () {
    $(".search").addClass('active');
    $(document).mouseup(function (e) {
      var container = $(".search");
      if (container.has(e.target).length === 0){
        container.removeClass('active');
      }
    });
  });
  
  $(".search__close").click(function () {
    $(".search").removeClass('active');
  });

  $(".product__responsive-title").click(function () {
    $(".product__responsive-title").not(this).removeClass('activeArrow');
    $(this).toggleClass("activeArrow");
  });

  //COUNT

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

  function initializeClock(el) {
    $(el).each(function() {
      var endtime = $(this).attr("data-deadline");
      var clock = $(this);
      var daysSpan = clock.find(".days");
      var hoursSpan = clock.find(".hours");
      var minutesSpan = clock.find(".minutes");
      var secondsSpan = clock.find(".seconds");

      function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.text(t.days);
        hoursSpan.text(("0" + t.hours).slice(-2));
        minutesSpan.text(("0" + t.minutes).slice(-2));
        secondsSpan.text(("0" + t.seconds).slice(-2));

        if (t.total <= 0) {
          clearInterval(timeinterval);
        }
      }

      updateClock();
      var timeinterval = setInterval(updateClock, 1000);
    });
  }

  initializeClock(".js-deadline");

});
