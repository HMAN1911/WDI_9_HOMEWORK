
$("button").click(function(event) {

  var $search = $(event.target).closest('body').find('input').val();

  var omdbLink = 'http://www.omdbapi.com/?s=' + $search

  console.log(omdbLink);

  var options = {
    url: omdbLink,
    method: 'get',
    data: { title: $search }
  }

  var showMovies = function(data) {

    $( ".result-box" ).empty()
    $('input').val('')

    for (var i = 0; i < data.Search.length; i++) {
    $( "<h2/>", {
        text: data.Search[i].Title + ' ' + data.Search[i].Year,
      })
      .appendTo( ".result-box" );
  }

    for (var i = 0; i < data.Search.length; i++) {
      console.log(data.Search[i].Title + ' ' + data.Search[i].Year);
    }
  }

  $.ajax(options).done(showMovies);

});
