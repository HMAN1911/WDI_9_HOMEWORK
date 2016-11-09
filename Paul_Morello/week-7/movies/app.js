$('button').on('click', function(event) {
  event.preventDefault();

  var title = $('.input').val();

  var options = {
    url: 'http://omdbapi.com/?t=' + title,
    method: 'get',
    data: { title: $('.input').val() }
  }

  $.ajax(options).done(function(response) {
    console.log('hello');
    console.log(response);
    console.log(response.Title);
    $('h2').text( response.Title );
    $('p').text(response)
  });

});
