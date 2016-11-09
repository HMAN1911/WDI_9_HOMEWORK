
$(document).ready(function() {

  if ($(".results")[0]){
      $(".results").fadeIn("800");
      $("html, body").delay(500).animate({
        scrollTop: $('h1').offset().top
      }, 800);
  }
  else {
    // $(".my-movies").fadeIn("800");
    $("html, body").delay(500).animate({
      scrollTop: $(document).height()-$(window).height()
    }, 800);
  }

  $(".my-movies img").mouseover(function(){
    $(".stars").css('color', 'gold');
  })

  $(".my-movies img").mouseleave(function(e){
    debugger
    $star.css('color', 'white');
  })

})
