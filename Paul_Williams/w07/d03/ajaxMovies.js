var displayResults = function(data) {
  for (var i = 0; i < data.Search.length; i++) {
    $('<h2><a target="_blank" href="http://www.imdb.com/title/' + data.Search[i].imdbID + '">' + data.Search[i].Title + '</a></h2>').appendTo($('body'));
  }
}

var performSearch = function() {
  $('h2').remove();

  var options = {
    url: 'https://www.omdbapi.com/?s=' + $('input').val(),
    method: 'get'
  }

  $.ajax(options).done(displayResults);
  $('input').val('')
}

$('button').click(performSearch);
$('input').keypress(function() {
  if (event.which === 13) {
    performSearch();
  }
});

/*
### Ajax Movies
* movies fetching using javascript

## Summary

The students will update their movies app to allow users to search the database of movies.


## Specification
Instead of returning a single title, the OMDb API allows you t do a search which will return multiple titles.

For example if you search on Jaws, you will get a list like the following:

* Jaws
* Jaws 2
* Jaws 3-D
* Jaws Special
* Jaws Wired Shut

write a frontend app to allow users to enter a search for movies, and to show the list of title within h2 tags without page refresh.

- index.html
- app.js
- style.css

### Extension

turn each h2 titles into a link that goes to the corresponding IMDB movie page that opens in a new window 
*/
