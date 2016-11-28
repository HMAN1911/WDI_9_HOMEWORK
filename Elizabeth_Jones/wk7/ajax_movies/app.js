  $("#search-btn").on('click', function(event) {
    event.preventDefault();     //prevent the button to send the form to the server
    console.log(event.target)

    $('#list').empty();  //empty child elements of the list div for every new search

    var movie = $('#query').val(); //not jquery because .val() is not a jquery object - important cause call wrong method eg. innerHTML vs .html
    console.log(movie);

    //setting to pass in the ajax request
    var settings = {
      url: 'http://omdbapi.com/', //required //can hardcode jaws here first to test
      data: { s: movie}, //query strings  - can pass in multiple q strings here
      method: 'get',    //default optional
      dataType: 'json'    //usually auto detected
    }

    //showResults variable to pass in the .done function
    var showResults = function(results){
        console.log('yep got response back');
        console.log(results);
        var movies = results.Search

        movies.forEach(function(movie){   //a function inside the foreach function
          console.log(movie.Title);
          var $listItem = $('<a>')
          .attr('target', '_blank')
          .attr('href', 'http://www.imdb.com/title/' + movie.imdbID)
          .text(movie.Title); //create new a tag and change text
          $('#list').append($listItem); //append row to the list div - below does the same thing
          // $row.appendTo('#list');
        });

    }

    //ajax request to the OMBD api
                    //when the request is done run another fucntion
    $.ajax(settings).done(showResults);  //do the showResults function when response is done
    $('#search').val('')        //clear the value back to nothing in input box

  });

//ajax is a function call so can pass through options as an arguement
//options is just made up - not
//showResults is call back functions
//if doesn't come back as json

//Can also write like this
// $.ajax(options).done(showResults);
//
//
// //OR
// // $.ajax({
// //   url: 'asdfsdfs.com',
  //    method: 'get',
  //    dataType: 'json'
// // }).done(function(results){
//
//    });

//loop inside showresults function
//  i = 0, results.search.length, i++
//
// var url_id = ombd.com/i + results.Search[i].imbdiD;                  //Search is an array given back with results from ombd
// var item = "<h2><a href=url_id> results.Search[i].Title <a><h2>"
// $(item).append to($(.container))
