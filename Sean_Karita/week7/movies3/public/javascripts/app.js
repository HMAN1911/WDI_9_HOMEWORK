console.log('ajax movies');

$('.search').on('click', function() {

  // empty child element within .matches
  $('.matches').empty();
  // get input from user
  var input = $('.form').val();

  // make an ajax request to omdb api
  var settings = {
    url: 'http://omdbapi.com/', // required
    data: { s: input },
    method: 'get', // default optional
    dataType: 'json' // usually auto detected
  };

    // make an ajax request to omdb api
    $.ajax(settings).done(function(res) {
      // console.log(res);

      var movies = res.Search;

      movies.forEach(function(movie) {
        // console.log(movie);

        var $h2 = $('<h2>').text(movie.Title);

        var $link = $('<a>')
        .attr('target', '_blank')
        .attr('href', 'http://www.imdb.com/title/' + movie.imdbID);

        $link.append($h2);

        $('.matches').append($link);

        // $row.appendTo('.matches');
      });
  });
});
