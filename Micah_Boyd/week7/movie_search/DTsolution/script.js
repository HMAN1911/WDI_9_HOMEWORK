console.log('ajax movies');

$('#search-btn').on('click', function() {

  console.log('searching...');

  $('#list').empty();

  var input = $('#q').val()

  var settings = {
    url: 'http://www.omdbapi.com',
    method: 'get',
    dataType: 'json',
    data: { s: input }
  }
  var movies = function(result){
    console.log('got result back');


    var movies = result.Search;
    movies.forEach(function(movie){
      console.log(movie.Title + ' ' + movie.Year);

      var $row = $( '<a>' )
      .attr('target', '_blank')
      .attr('href', 'http://www.imdb.com/title/' + movie.imdbID )
      .text(movie.Title + ' ' + movie.Year);

      $('#list').append($row);
      $('#q').val('');
    })
  }

  $.ajax(settings).done(movies)

});
