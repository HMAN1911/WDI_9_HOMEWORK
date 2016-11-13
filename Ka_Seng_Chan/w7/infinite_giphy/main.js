// console.log('its working')

var $q = $('#q');
var $resultsDIv = $('#search-results');
var limit = 10;
var offset = 0;
var apiKey = 'dc6zaTOxFJmzC';

// function to show 10 results
var showResults = function(response) {
  // append 10 giphy images to div
  var gifs = response.data;
  for (var i = 0; i < gifs.length; i++) {
    var newImg = '<img src="' + gifs[i].images.original.url + '" alt="">'
    $('#search-results').append(newImg);
    // console.log(gifs[i]);
  }
  // console.log(response);
}


$('#search-btn').on('click', function(event) {
  event.preventDefault();
  offset = 0;
  $('#search-results').empty();

  var options = {
    url: 'http://api.giphy.com/v1/gifs/search',
    method: 'get',
    dataType: 'json',
    data: { q: $q.val(), limit: limit, offset: offset, api_key: apiKey }
  }

  $.ajax(options).done(showResults);

})


$(window).scroll( function() {
  if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {
    offset += 10;
    var options = {
      url: 'http://api.giphy.com/v1/gifs/search',
      method: 'get',
      dataType: 'json',
      data: { q: $q.val(), limit: limit, offset: offset, api_key: apiKey }
    }

    $.ajax(options).done(showResults);
  }
})
