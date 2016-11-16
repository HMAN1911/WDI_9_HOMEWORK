// write a frontend app to allow users to enter a search for movies, and to show the list of title within h2 tags without page refresh.

$(document).ready(function() {

  $('button').on('click', function(event) {
    event.preventDefault();

    var title = $('input').val();
    // console.log($title);

    // make a request to the api
    var options = {
      url: 'http://omdbapi.com/?s=' + title,
      method: 'get',
      data: { s: title }
    };

    // returns a response
    // json - array with object/s
    // get titles
    var renderList = function(data) {
      var searchData = data.Search;
      var list = [];

      for (var i = 0; i < searchData.length; i++) {
        list.push('<li><h2><a data-id=' + searchData[i].imdbID + '>' + searchData[i].Title + '</a></h2></li>');
      }

      return list;
    };

    var printResults = function(data) {
      var resultsList = renderList(data);
      // console.log(resultsList);
      var $searchResults = $('.search-results');

      // prevent from clicking twice by clearing search container
      $searchResults.empty().append('<ul>' + resultsList.join('') + '</ul>');
    };

    $.ajax(options).done(printResults);

  });

});


// get the links working - where to send anchor tags so page doesn't refresh?
// work out how to pass data-id into new ajax call
