
// $(document).ready(function() {
//   $('button').on('click', function(event) {
//     event.preventDefault();

//     var title = $('input').val();
//     var options = {
//       url: 'http://omdbapi.com/?s=' + title,
//       method: 'get',
//       data: { s: title }
//     };
//     var renderList = function(data) {
//       var searchData = data.Search;
//       var list = [];

//       for (var i = 0; i < searchData.length; i++) {
//         list.push('<li><h2><a data-id=' + searchData[i].imdbID + '>' + searchData[i].Title + '</a></h2></li>');
//       }

//       return list;
//     };

//     var printResults = function(data) {
//       var resultsList = renderList(data);
//       var Results = $('#results');

//       $Results.empty().append('<ul>' + results.join('') + '</ul>');
//     };

//     $.ajax(options).done(printResults);

//   });

// });
//----------------------------------------------------------------------------

$(document).ready(function() {
  console.log('ajax movies');
  $('button').on('click', function(event) {
    event.preventDefault();
    console.log('ajax movies');
    // debugger
    $('#results').empty();

    var input = $('#input').val();

    var settings = {
      url: 'http://omdbapi.com/', 
      data: { s: input },
      method: 'get',
      dataType: 'json' 
    }
    $.ajax(settings).done(function(res) {

      var movies = res.Search;

      movies.forEach(function(movie){

        var $h2 = $('<h2>').text(movie.Title);

        var $link = $('<a>')
          .attr('target', '_blank')
          .attr('href', 'http://www.imdb.com/title/' + movie.imdbID)

        $link.append($h2);

        $('#results').append($link);
      })
    })
  })
})