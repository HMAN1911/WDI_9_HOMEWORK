var $body = $('body');
var $window = $(window);
var $document = $(document);
var $input = $('input');

var offset = 0;
var query = '';

var clearSearch = function() {
  $('video').remove();
};

var getResult = function(i, v) {
  var url = v.images.fixed_height.mp4;
  var $video = $('<video src="' + url + '" autoplay loop>');
  $body.append($video);
};

var nextTen = function() {
  var request = $.get('http://api.giphy.com/v1/gifs/search?q=' + query + '&offset=' + offset + '&limit=10&api_key=dc6zaTOxFJmzC');
  offset += 10;
  request.done(function(v) {
    $.each(v.data, getResult);
  });
};

var initialResult = function(e) {
  e.preventDefault();
  clearSearch();
  offset = 0;
  query = $input.val();
  nextTen();
};

var scrollPosition = function() {
  if ($window.scrollTop() + $window.height() === $document.height()) {
    nextTen();
  }
};

$('button').click(initialResult);
$window.scroll(scrollPosition);
