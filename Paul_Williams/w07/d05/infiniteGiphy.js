var $body = $('body');
var $window = $(window);
var $document = $(document);
var $input = $('input');

var offset = 0;
var query = '';

var clearResults = function() {
  $('img').remove();
}

var drawResult = function(i, v) {
  var url = v.images.fixed_height.url;
  $img = $('<img src="' + url + '">');
  $body.append($img);
}

var getNextTenResults = function() {
  var request = $.get('http://api.giphy.com/v1/gifs/search?q=' + query + '&offset=' + offset + '&limit=10&api_key=dc6zaTOxFJmzC');
  offset += 10;
  request.done(function(v) {
    $.each(v.data, drawResult);
  });
}

var getInitialResults = function() {
  clearResults();
  offset = 0;
  query = $input.val();
  getNextTenResults();
}

var checkScrollPosition = function() {
  if ($window.scrollTop() + $window.height() === $document.height()) {
    getNextTenResults();
  }
}

$('button').click(getInitialResults)
$window.scroll(checkScrollPosition);

/*
# 2. Infinite Giphy

When the user enters a search term, return 10 images from Giphy, and arrange them vertically on the page.

When the user scrolls near to the bottom of the page, load an additional 10 images. And keep going!
*/
