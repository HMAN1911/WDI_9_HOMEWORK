var giphy_api = "http://api.giphy.com/v1/gifs/search?q=";
var api_key = "&api_key=dc6zaTOxFJmzC";
var search_url;
var limit = "&limit=10";
var offset = "&offset=";
var offset_val = 0;;

$( document ).ready(function() {
  // get click event
  $(document).on('click', '#search_btn', function (e) {
    e.preventDefault();
    offset_val = 0;
    $('.giphy_results').empty();
    doSearch();
  });
});


function doSearch() {
  search = $('#search_req').val().replace(" ", "+");
  search_url = giphy_api + search + api_key + limit + offset + offset_val;
  var options = {
    url: search_url,
    type: "GET"
  }
  $.ajax(options).done(showResults).fail(callFail);
}



// scroll to bottom request 10 more
$(window).scroll(function () {
    var scroll_top = $(window).scrollTop();
    var w_height = $(window).height();
    var d_height = $(document).height();
    if (scroll_top + w_height === d_height) {
      offset_val += 10;
      doSearch();
      console.log('Loading 10 more');
    }
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
