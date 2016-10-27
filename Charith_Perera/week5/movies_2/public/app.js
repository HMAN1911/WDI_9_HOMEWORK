
$(document).ready(function() {
  $(".results").fadeIn("800");
  $("html, body").delay(500).animate({
    scrollTop: $('input').offset().top
  }, 800);
})
