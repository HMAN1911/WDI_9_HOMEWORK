$(document).ready(function() {
  $(".btn-search").click(function() {
    $(".movie").empty();
    $(".results").empty();
    var searchTerm = $(".search-term").val();
    $.ajax({
      url: 'http://omdbapi.com/?s=' + searchTerm,
      method: 'get'
    })
    .done(function(response) {
      if (response.Response !== "False") {
        var results = response.Search;
        buildResults(results);
      }
    })
  });

  $(".results").click("li", function(e) {
    var imdbID = $(e.target).attr('data-id');
    $.ajax({
      url: 'http://www.omdbapi.com/?i=' + imdbID + '&plot=short&r=json',
      method: 'get'
    })
    .done(function(response) {
      showMovie(response)
    });
  })

  function buildResults(results) {

    for (var i = 0; i < results.length; i++) {
      $(".results").append("<li data-id='" + results[i].imdbID +"'>" + results[i].Title + "</li>")
    }
  }

  function showMovie(result) {
      $(".movie").empty();
      $(".movie").append("<h2><a target='_blank' href='http://www.imdb.com/title/" + result.imdbID + "/'>" + result.Title +"</a></h2");
      if (result.Poster !== "N/A") {
        $(".movie").append("<img src='" + result.Poster + "'>");
      }
      $(".movie").append("<h3>" + result.Year + "</h3>");
      $(".movie").append("<p>" + result.Director + "</p>")
      $(".movie").append("<p>" + result.Actors + "</p>")


  }
});
