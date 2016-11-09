console.log('ajax movies');

var search_request;
var movie_requested;
var omdbapi = "http://www.omdbapi.com/?s=";

$(document).ready(function() {
  $('.search_btn').click(function() {
    search_request = (($('#search').val()));
    movie_requested = omdbapi + search_request;
    console.log("This is the movie requested " + movie_requested);
    get_movies(movie_requested);
  });
});

function get_movies(movie_requested) {
  console.log('movie requested');
  $.get( movie_requested, function( data ) {
    $( ".results" )
      .append("Data: " + data);
  }, "json" );
}
