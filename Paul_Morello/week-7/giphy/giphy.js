
var offsetApi = 0;

$('button').on('click', function(event) {
  offsetApi = 0;
  $('.display').empty();

  var title = $('.input').val();

  var options = {
    url: 'http://api.giphy.com/v1/gifs/search?=q',
    data: {
      q: title,
      limit: 10,
      offset: offsetApi,
      api_key: "dc6zaTOxFJmzC"
      },
    method: 'get',
    dataType: 'json'
  }

  $.ajax(options).done(function(results) {
    console.log('hello');
    console.log(results);

    var gifs = results.data;

    gifs.forEach(function(gif) {

      var $embed = $('<iframe>').attr('src', gif.embed_url);
      $embed.appendTo('.display');

    });
  });
});

$(window).scroll(function () {

  offsetApi += 10;

  var title = $('.input').val();
  var options = {
    url: 'http://api.giphy.com/v1/gifs/search?=q',
    data: {
      q: title,
      limit: 10,
      offset: offsetApi,
      api_key: "dc6zaTOxFJmzC"
      },
    method: 'get',
    dataType: 'json'
  }

  if ($(window).scrollTop() >= $(document).height() - $(window).height() - 10) {

    $.ajax(options).done(function(results) {

      var gifs = results.data;

      gifs.forEach(function(gif) {

        var $embed = $('<iframe>').attr('src', gif.embed_url);
        $embed.appendTo('.display');

      });
    });
  }
});
