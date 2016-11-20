console.log('js is loaded');

$('#search-btn').on('click', function(){

  $('#result').empty();

  var input = $('#inputBox').val()

  var settings = {
    url: 'http://api.giphy.com/v1/gifs/search',
    data: { q: input, api_key: 'dc6zaTOxFJmzC', limit: 10},
    method: 'get',
    dataType: 'json'
  }

  $.ajax(settings).done(function(res) {

    // console.log(res.data);
    // [0].images.downsized.url   <<<< to get the actual url
    var gifs = res.data;

    gifs.forEach(function(gif) {
      // console.log(gif.images.downsized.url);

      var $img = $('<img>').attr('src', gif.images.downsized.url);

      var $div = $('<div>');

      $img.appendTo($div);

      $('#result').append($div)
    });


  });


});
