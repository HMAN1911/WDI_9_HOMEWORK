$('button').on('click', function(event) {
  event.preventDefault();

  $('.display').empty();

  var title = $('.input').val();

  var options = {
    url: 'http://omdbapi.com/?s=',
    data: { s: title },
    method: 'get',
    dataType: 'json'
  }

  $.ajax(options).done(function(response) {
    console.log('hello');
    console.log(response);

    var movies = response.Search;

    movies.forEach(function(movie){

      var $h2 = $('<h2>').text(movie.Title);

      var $link = $('<a>').attr('target', '_blank').attr('href', 'http://www.imdb.com/title/' + movie.imdbID);

      $link.append($h2);

      $link.appendTo('.display');
      // $('div').append($row);

    });
  });

});

// $('p').text(response[i])
// $newLink.attr("href", "http://omdbapi.com/?s=" + response.Search[i].imdbId)
