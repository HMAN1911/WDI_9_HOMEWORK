// Get movie title from query string
var href = window.location.href;
if (href.indexOf('?') >= 0) {
  var query = href
    .substring(href.indexOf('?') + 1)
    .split('&');
  var queryObj = {};
  query.forEach(function(arg) {
    var pair = arg.split('=');
    queryObj[pair[0]] = pair[1]
  });

  if (queryObj.title) {
    // Display movie details
    $.ajax({
      url: 'http://www.omdbapi.com/?t=' + queryObj.title,
      method: 'get'
    })
    .done(function(res) {
      $('h2').text(res.Title);
      $('#poster').attr('src', res.Poster);
      $('#released').text(res.Released);
      $('#genre').text(res.Genre);
      $('#plot').text(res.Plot);
      $('#runtime').text(res.Runtime);
    });
  }
  else {
    // TODO: Display error
  }
}
