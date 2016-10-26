
$(document).ready(function() {

  if ($(".results")[0]){
      $(".results").fadeIn("800");
      $("html, body").delay(500).animate({
        scrollTop: $('h1').offset().top
      }, 800);
  }

  // if ($(".my-movies")[0]){
  //     $(".my-movies").fadeIn("800");
  //     $("html, body").delay(500).animate({
  //       scrollBottom $('h1').offset().bottom
  //     }, 800);
  // }


})
