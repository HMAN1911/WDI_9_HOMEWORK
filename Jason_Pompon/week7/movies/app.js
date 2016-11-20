console.log('test');

$('#search-btn').on('click', function(){

  // to empty the list every time you do a new search
  $('#list').empty();

  // get input from user
  var input = $('#q').val();

  var settings = {
    url: 'http://omdbapi.com/', // required
    data: { s: input},
    method: 'get', // default optional
    dataType: 'json' // usually auto detected
  }
  // make an ajax request to omdb api
  $.ajax(settings).done(function(res) {

    var movies = res.Search;

    movies.forEach(function(movie){

      var $h2 = $('<h2>').text(movie.Title);

      var $link = $('<a>')
                  .attr('target', '_blank')
                  .attr('href', 'http://www.imdb.com/title/' + movie.imdbID)

      $link.append($h2);
                  // these could be on one line. just for reading purposes



      $('#list').append($link);
      // $row.appendTo('#list'); this will give the same as the above one just diffrent way of writing it
    });

  });

});
