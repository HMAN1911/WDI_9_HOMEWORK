$('button').on('click', function(event) {
  event.preventDefault();

  var options = {
    url: 'http://omdbapi.com?s=' + $(event.target).closest('.input-box').find('input').val(),
    method: 'post',
  };

  $.ajax(options).done(function(data){

    $('.details > p').remove();

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