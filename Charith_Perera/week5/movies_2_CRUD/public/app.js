
$(document).ready(function() {
  $(".results").fadeIn("800");
  $("html, body").delay(500).animate({
    scrollTop: $('input').offset().top
  }, 800);

  $('.add-button').click(function() {
    var overlay = document.getElementById("overlay");
    overlay.style.visibility = "visible";
  })

})
