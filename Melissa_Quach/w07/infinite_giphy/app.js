// Grab DOM elements
var $grid = $('.grid');
var $input = $('#q');

var offset = 0;

// Retrieve search results from Giphy API and pass results to callback
var loadGiphyResults = function(searchTerm) {
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      q: searchTerm,
      api_key: 'dc6zaTOxFJmzC',
      offset: offset
    }
  })
  .done(function(res) {
    offset += res.pagination.count;
    $grid.append(generateThumbnails(res.data));
  });
}

// Convert search results to HTMl elements
var generateThumbnails = function(posts) {
  return posts.map(function(post) {
    var $post = $('<a>', {
      href: post.url,
      class: 'grid-item',
      target: '_blank'
    });
    $post.append($('<img>', {
      src: post.images.downsized.url
    }));
    return $post;
  });
}

// Retrieve images from Giphy
$('form').submit(function(e) {
  e.preventDefault();

  // Reset values
  $grid.empty();
  offset = 0;

  // Load images from Giphy API
  loadGiphyResults($input.val());
});

// Retrieve more images from Giphy once user reaches bottom of screen
$(window).scroll(function() {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    loadGiphyResults($input.val());
  }
});
