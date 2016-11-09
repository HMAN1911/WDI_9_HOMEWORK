// Instead of returning a single title, the OMDb API allows you t do a search which will return multiple titles.
//
// For example if you search on Jaws, you will get a list like the following:
//
// Jaws
// Jaws 2
// Jaws 3-D
// Jaws Special
// Jaws Wired Shut
// write a frontend app to allow users to enter a search for movies, and to show the list of title within h2 tags without page refresh.
//
// index.html
// app.js
// style.css
// Extension
//
// turn each h2 titles into a link that goes to the corresponding IMDB movie page that opens in a new window

$('button').on('click',function(event) {
  event.preventDefault();

  console.log(event.target);

  var $movie = $('#search').val();
  var options = {
    url: 'http://omdbapi.com/?t=' + $movie,
    method: 'get',
    data: { movie_title: $movie }
  }

  var update = function(data) {
    console.log ("Hello")
    console.log(data)
    var $search = $(event.target).closest('.search');
  }

  $.ajax(options).done(update)

});
