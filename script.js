$(window).scroll(function () {
  var scroll_position = $(window).scrollTop();
  $(".section1").css({
    "background-position-x": -scroll_position + "px",
  });

  var section2_position = $(".section2").offset().top;
  var section3_position = $(".section3").offset().top;
  var window_height = $(window).height();

  if (scroll_position + window_height - section2_position > 0) {
    $(".section2").css({
      "background-position-x":
        section2_position - scroll_position - window_height + "px",
    });
  }
  if (scroll_position + window_height - section3_position > 0) {
    $(".section3").css({
      "background-position-x":
        section3_position - scroll_position - window_height + "px",
    });
  }
});
