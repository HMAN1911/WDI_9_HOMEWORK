var $input = $('#query');
var $resultList = $('#search-results');
var $error = $('.error');
var $spinner = $('.fa-spinner');

var searchRequestID = 0;

$input.keypress(function(e) {
  $spinner.removeClass('hidden');
  clearTimeout(searchRequestID);
  // Delay search until user done typing
  searchRequestID = setTimeout(function() {
    $resultList.empty();
    $error.html('');

    var query = $input.val();
    $.ajax({
      url: 'http://www.omdbapi.com/?s=' + query,
      method: 'get'
    })
    .done(function(res) {
      if (res.Response == "True") {
        res.Search.forEach(function(movie) {
          var $movieItem = $('<h2>');
          var $infoLink = $('<a>')
            .attr('href', '/info.html?title=' + movie.Title)
            .text(movie.Title)
          $movieItem.append($infoLink);
          $resultList.append($movieItem);
        });
      }
      else {
        $error.html('Could not load response. Please try again.');
      }
      $spinner.addClass('hidden');
    });

  }, 1000);
});
