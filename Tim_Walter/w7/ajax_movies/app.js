console.log('ajax movies');

var search_request;
var movie_requested;
var omdbapi_s = "http://www.omdbapi.com/?s=";
var omdbapi_t = "http://www.omdbapi.com/?t="
var imdb_site = "http://www.imdb.com/title/"
var movie_list;


$(document).ready(function() {
  $('.search_btn').click(function(e) {
    // prevent form sending form
    e.preventDefault()
    // create url to be sent to omdbapi
    search_request = $('#search_input').val();
    movie_requested = omdbapi_s + search_request;
    // empty results div for new search
    $('.results').empty();
    // empty search field to prevent multiple request
    $('#search_input').val('');
    // get_movies(movie_requested);
    var options = {
      url: movie_requested,
      method:'get' //defualt method
    }
    $.ajax(options).done(displayMovies).fail(callFail);
  });
});


function displayMovies(response){
  movie_list = response;
  // iterate over search results
  for (var i=0; i<movie_list.Search.length-1; i++) {
    // create string for movie display result.
    title = movie_list.Search[i].Title;
    year = movie_list.Search[i].Year;
    imdb = movie_list.Search[i].imdbID;
    movie = title + " " + year + " IMDB: " + imdb;
    // create link to imdb site
    link_2_imdb = imdb_site + imdb;
    // create link from movie details
    $('<a>',{
        text: movie,
        href: link_2_imdb
    }).appendTo('.results');
    // add horizontal line after each movie
    $(".results").append("<hr />");
  }
};

function callFail() {
  message = "Ooops... something went wrong. Try again later."
  $(".results").append(message);
};
