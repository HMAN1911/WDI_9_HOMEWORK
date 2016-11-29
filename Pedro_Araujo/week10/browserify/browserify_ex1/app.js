var camelCaser = require('camelcase');
var rgbHex = require('rgb-hex');

$('.input-form').submit(function(event) {
  event.preventDefault();

  var input = function(name) {
    return Number($('.input-form').find('input[name=' + name + ']').val());
  };

  var r = input("r");
  var g = input("g");
  var b = input("b");

  var hex = rgbHex(r, g, b);

  $('.result-text span').text(hex);

  $('.result-color').css('backgroundColor', '#' + hex);
});
