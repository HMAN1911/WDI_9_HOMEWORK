
$('.search-btn').on('click', function() {

  movieTitle = $('.search-input').val();
  // console.log($movieTitle);
  event.preventDefault();
  var options = {
    url: 'http://www.omdbapi.com/',
    method: 'get',
    data: { s: movieTitle}
  }
  function updateSearchResults(response) {
    // console.log(response);
    $('.search-results').empty();
    var moviesSearch = response['Search'];
    // console.log(response['Search']);
    for (var i = 0; i < moviesSearch.length; i++) {
      $('.search-results').append('<h2><a href="http://www.imdb.com/title/' + moviesSearch[i]['imdbID'] + '">'  + moviesSearch[i]['Title'] + '</a></h2>');
    }
  }
  $.ajax(options).done(updateSearchResults);
})
