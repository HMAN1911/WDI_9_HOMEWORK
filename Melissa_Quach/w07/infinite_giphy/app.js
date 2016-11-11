// Grab DOM elements
var $grid = $('.grid');
var $input = $('#q');

var offset = 0;

// Retrieve images from Giphy
$('form').submit(function(e) {
  e.preventDefault();

  // Reset values
  $grid.empty();
  offset = 0;

  // Load images from Giphy API
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      q: $input.val(),
      api_key: 'dc6zaTOxFJmzC',
      offset: offset
    }
  })
  .done(function(res) {
    offset += res.pagination.count;
    var $images = res.data.map(function(post) {
      var $post = $('<a>', {
        href: post.url,
        class: 'grid-item'
      });
      $post.append($('<img>', {
        src: post.images.downsized.url
      }));
      return $post;
    });

    $grid.append($images);
    console.log(res);
  });
});

// Retrieve more images from Giphy once user reaches bottom of screen
$(window).scroll(function() {

});
