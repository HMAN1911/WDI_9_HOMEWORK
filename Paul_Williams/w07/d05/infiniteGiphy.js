var $input = $('input');
var $button = $('button');
var $body = $('body');

var drawResult = function(i, v) {
  var url = v.images.fixed_height.url;
  $img = $('<img src="' + url + '">');
  $body.append($img);
}

var getFirstTenResults = function() {
  var request = $.get('http://api.giphy.com/v1/gifs/search?q=' + $input.val() + '&limit=10&api_key=dc6zaTOxFJmzC');
  request.done(function(v) {
    $.each(v.data, drawResult);
  });
}

$button.click(getFirstTenResults)

/*
# 2. Infinite Giphy

When the user enters a search term, return 10 images from Giphy, and arrange them vertically on the page.

When the user scrolls near to the bottom of the page, load an additional 10 images. And keep going!
*/
