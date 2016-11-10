$('.input-box button').on('click', function(event) {
  event.preventDefault();

  var title = $('.input-box input').val();

  var options = {
    url: 'http://omdbapi.com',
    data: { s: title }
  };

  $.ajax(options).done(function(data){

    $('.details > h2').remove();

    data.Search.forEach(function(movie){
      
      var $a = $("<a>", {
          href: "http://www.imdb.com/title/" + movie.imdbID,
          text: movie.Title
      });

      var $h2 = $("<h2>").append($a);
      $('.details').append($h2);

    });
  });
});