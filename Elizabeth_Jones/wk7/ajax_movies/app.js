  $("button").on('click', function(event) {
    event.preventDefault();     //prevent the button to send the form to the server
    console.log(event.target)

    var movie = $('#search').val(); //not jquery because .val() is not a jquery object
    console.log('movie')

    //make a request to the api
    var options = {
      url: 'http://omdbapi.com/?s=' + movie,
      method: 'get',
      dataType: 'json'
      // data: {movie_title: movie}
    }

    var showResults = function(results){
        console.log(results)
        $('#data').text(results.Search[0].Title) //get div with id data and change text to results .title
    }
                    //when the request is done run another fucntion
    $.ajax(options).done(showResults);  //do the showResults function when response is done
    $('#search').val('')        //clear the value back to nothing in input box
  });


//ajax is a function call so can pass through options as an arguement
//options is just made up - not
//showResults is call back functions
//if doesn't come back as json


//loop inside showresults function
//  i = 0, results.search.length, i++
//
// var url_id = ombd.com/i + results.Search[i].imbdiD;                  //Search is an array given back with results from ombd
// var item = "<h2><a href=url_id> results.Search[i].Title <a><h2>"
// $(item).append to($(.container))
