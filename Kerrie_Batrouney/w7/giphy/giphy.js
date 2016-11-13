console.log('Giphy search');

// #javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });


$('#search-btn').on('click', function() {

  // empty child elem within #list
  $('#list').empty();

  // get input from user
  var input = $('#q').val();
  var offset = 0;
 // debugger;
  var settings = {
    url: "http://api.giphy.com/v1/gifs/search", // required
    data: {q: "beagle", api_key: "dc6zaTOxFJmzC", limit: 10, offset: 0},
    method: 'get',
    fmt: 'JSONP' // usually auto detected
  };
  //  debugger;
console.log(settings);
  // make an ajax request to omdb api
  $.ajax(settings).done(function(res) {

    var giphys = res.data;

    giphys.forEach(function(giphy){

      var $pic = $('<img>').attr('src', giphy.embed_url);

      // var $link = $('<a>')
      //   .attr('target', '_blank')
      //   .attr('href', 'http://www.imdb.com/title/' + movie.imdbID)

      // $link.append($h2);

      $('#list').append($pic);

      // $row.appendTo('#list');
    });

  });

});
