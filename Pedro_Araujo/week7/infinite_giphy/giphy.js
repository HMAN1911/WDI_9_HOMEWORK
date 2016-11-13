
console.log('test');

$('.search-btn').on('click', function() {

  $('.results').empty();

  var search = $('.search-box').val();
  var search_url = "http://api.giphy.com/v1/gifs/search?q="
  var api_key = "&api_key=dc6zaTOxFJmzC"
  var settings = {
    url: search_url + search + api_key,
    data: {s: search},
    method: 'get',
    dataType: 'json'
  }

  $.ajax(settings).done(function(res) {
    var items = res.data;

    items.forEach(function(item) {
      var $newItem = $("<li>");
      var itemId = item.id;
      var img = "<img src='http://media4.giphy.com/media/" + itemId + "/giphy-downsized-medium.gif' />";

      debugger
      $newItem.append(img);
      $('#list-results').append($newItem);


    });
  });

});
