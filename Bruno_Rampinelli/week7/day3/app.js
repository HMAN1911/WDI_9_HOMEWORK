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

  var movie = $('#search').val();
  var options = {
    url: 'http://omdbapi.com/?s=' + movie,
    method: 'get'
    // data: { movie_title: movie }
  }

  var update = function(data) {
    console.log ("Hello")
    console.log(data)
    $("#data").text(data.Title)

  }

  $.ajax(options).done(update)

});


PEDRO SOLUTION

$( "#btnsearch" ).click(function(event) {

    event.preventDefault();  // Prevent the button to send the
    var search = $("#search-box").val(); // #search-box is the text input
    var url_s = "http://omdbapi.com/?s=" + search; //url that searches by title

    var options = {
      method: 'GET',
      url: url_s,
      dataType: 'json',
      success: function(results){
        for (var i = 0; i < results.Search.length; i++) {
          var url_id = "http://omdbapi.com/?i=" + results.Search[i].imdbID; //url that searches by imdbID
          var item = "<h2> <a href='"+ url_id + "' >" + results.Search[i].Title + "</a></h2>"; // each item created
          $(item).appendTo( $(".container") ); // add item to container div
        }
      },
      error: function(error){
        console.log("@ERROR", error);
      }

    };

    $.ajax(options);
    $("#search-box").val('') // clean the input
  });
