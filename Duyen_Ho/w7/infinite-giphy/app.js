console.log ('infinite giphy');

$('#search-btn').on('click', function() {

  // first empty child elements in results
  $('#results').empty();

  // get user input
  var input = $('#q').val();

  var options = {
    url: 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC'
  };

  // make ajax call to giphy api
  $.ajax(options).done(function(response) {

    var giphy = response.data;

    var giphyCounter = 0;

    // return only 10 giphys
    for (var i = 0; i < giphyCounter + 10; i++) {
      var $image = $('<div>').append($('<img>').attr('src', giphy[i].images.original.url));
      $('#results').append($image);
    }
    giphyCounter += 10;
    console.log(giphyCounter);

    // on scroll end, increase counter and return another 10
    $(window).scroll(function() {
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
        for (var i = 10; i < giphyCounter + 10; i++) {
          var $image = $('<div>').append($('<img>').attr('src', giphy[i].images.original.url));
          $('#results').append($image);
        }
        giphyCounter += 10;
        console.log(giphyCounter);

        // need to work out infinite scroll
      }
    });

  });



});




// 2. Infinite Giphy
//
// When the user enters a search term, return 10 images from Giphy, and arrange them vertically on the page.
//
// When the user scrolls near to the bottom of the page, load an additional 10 images. And keep going!


// References:
// http://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom
// https://www.sitepoint.com/jquery-infinite-scrolling-demos/

// Notes:
// scrollTop() - Get the current vertical position of the scroll bar for the first element in the set of matched elements or set the vertical position of the scroll bar for every matched element.

// Returns height of browser viewport
// $(window).height();

// Returns height of HTML document
// $(document).height();
