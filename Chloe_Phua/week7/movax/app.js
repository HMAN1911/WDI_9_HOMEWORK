//listen to button click
$('.searchBtn').click(function(event) {
  $('.results').empty()

//event preventDefault
//get input from user
  var titleSearch = $('.search').val()

  var options = {
    url: 'http://omdbapi.com/',
    method: 'get',
    data: {s: titleSearch},
    dataType: 'json'
  }
  //show search results - this is the response

  var displayResults = function(response) {

    var titleResponse = response.Search

    titleResponse.forEach(function(movie) {
      var output = $("<a>", {
          href: "http://www.imdb.com/title/" + movie.imdbID,
          text: movie.Title
        });
      $results = $('.results').append($(output));
    })
  }

  $.ajax(options).done(displayResults)

})

//you can also make an ajax request to omdb api
// $.ajax({
//   url: 'http://omdbapi.com',
// }).done(function(res) {
// moo m om aosdhasjkdh
// })
