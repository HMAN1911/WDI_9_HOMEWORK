var $input = $('#query');
var $resultList = $('#search-results');
var $error = $('.error');

var searchRequestID = 0;

$input.keypress(function(e) {
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
          $movieItem.text(movie.Title);
          $resultList.append($movieItem);
        });
      }
      else {
        $error.html('Could not load response. Please try again.');
      }
    });
  }, 1000);
});
