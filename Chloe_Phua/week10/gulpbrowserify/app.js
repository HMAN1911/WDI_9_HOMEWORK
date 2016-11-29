const rgbHex = require('rgb-hex');

$('.checkcolor').on("click",function() {
  var input = $('.colorinput').val();
  console.log(input);
  var color = rgbHex(input);
  $('.box').css('background-color', '#'+color);
});
