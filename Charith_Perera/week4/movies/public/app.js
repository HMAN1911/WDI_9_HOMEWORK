// var $resultsSection = $(".results");
// var $form = $("form");
//
//
// $form.submit(function() {
//   $resultsSection.fadeToggle("slow", function(){
//
//   });
// })
//
// // form.submit(function() {
// //   resultsSection.fadeToggle( "slow", function() {
// //   // Animation complete
// //   });
// // })

$(document).ready(function() {
  $(".results").fadeIn("800");
  $("html, body").delay(500).animate({
    scrollTop: $('input').offset().top
  }, 800);
})
