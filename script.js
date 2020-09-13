$(window).scroll(function () {
  var scroll_position = $(window).scrollTop();
  var window_height = $(window).height();

  //for each section
  $("section").each(function () {
    var section_position = $(this).offset().top;
    console.log(section_position, window_height);

    if (
      scroll_position + window_height - section_position > 0 &&
      section_position + window_height > scroll_position
    ) {
      $(this).css({
        "background-position-x":
          section_position - scroll_position - window_height + "px",
      });
    }
    $(".section1").css({
      "background-position-x": -scroll_position + "px",
    });
  });
});

/* 
  var section2_position = $(".section2").offset().top;
  var section3_position = $(".section3").offset().top;
  var window_height = $(window).height();

  if (
    scroll_position + window_height - section2_position > 0 &&
    scroll_position < section2_position + window_height
  ) {
    $(".section2").css({
      "background-position-x":
        section2_position - scroll_position - window_height + "px",
    });
  }
  if (
    scroll_position + window_height - section3_position > 0 &&
    scroll_position < section3_position + window_height
  ) {
    $(".section3").css({
      "background-position-x":
        section3_position - scroll_position - window_height + "px",
    });
  }
});
 */
