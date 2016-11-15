var giphy_api = "http://api.giphy.com/v1/gifs/search?q=";
var api_key = "&api_key=dc6zaTOxFJmzC";
var search_url;
var limit = "&limit=10";
var offset = "&offset=";
var offset_val = 10;

$( document ).ready(function() {
  $(document).on('click', '#search_btn', function (e) {
    e.preventDefault();
    search = $('#search_req').val().replace(" ", "+");
    console.log(search);
    search_url = giphy_api + search + api_key + limit + offset + offset_val;
    console.log(search_url);

    var options = {
      url: search_url,
      type: "GET"
    }

    $.ajax(options).done(showResults).fail(callFail);

  });
});


function showResults(data) {
  results = data.data;
  // iterate over search results
  for (var i=0; i<results.length-1; i++) {
    // create string for movie display result.
    gif_url = results[i].images.fixed_width.mp4;
    // create link from movie details
    var video = $('<video />', {
    id: 'video',
    src: gif_url,
    type: 'video/mp4',
    controls: true,
    loop: true,
    autoplay: true
    });
    video.appendTo($('.giphy_results'));





  }

};

function callFail() {
  message = "Ooops... something went wrong. Try again later."
  console.log(message);
};
