
$('.search-btn').on('click', function(event) {

  $('.results').empty();

  var search = $('.search-box').val();

  var settings = {
    url: 'http://api.giphy.com/v1/gifs/search',
    method: 'get',
    data: {q: search,
          api_key: 'dc6zaTOxFJmzC',
          offset: 0,
          limit: 10},
    dataType: 'json',
  }

  var displayResults = function(res) {
    var items = res.data;

    items.forEach(function(item) {
      var newItem = $("<img>", {
            src: item.images.fixed_width.url
      });
      $results = $('#list-results').append($("<tr>")).append($(newItem));
    })
  }

  $.ajax(settings).done(displayResults);

  $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() == $(document).height()) {
        options.data.offset += 10;
        $.ajax(options).done(displayResults);
     }
  });


});
