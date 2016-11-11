
console.log('ready');

var input = $( '#q' ).val()
var limit = 10
var offset = 0

var loadTen = function(input, limit){

  var settings = {
    url: 'http://api.giphy.com/v1/gifs/search',
    data: {
      q: input,
      limit: limit,
      offset: offset,
      api_key: 'dc6zaTOxFJmzC'
    }
  }

  var createGiphys = function(result){
    var giphys = result.data;

    giphys.forEach(function(giphy) {
      var $row = $( '<img>' )
      .attr('src', giphy.images.downsized.url)

      $row.hide().appendTo('#list').fadeIn();

    });

    // $('#q').val('');
  }

  $.ajax(settings).done(createGiphys)

  offset += 10
}

$('#search-btn').on('click', function() {
  loadTen(input, limit);
});

  // $('#list').empty(););

  var win = $(window);

  	// Each time the user scrolls
  	win.scroll(function() {
  		// End of the document reached?
  		if ($(document).height() - win.height() == win.scrollTop()) {

        loadTen(input, limit);

  		}
  	});
