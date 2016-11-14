//listen to button click
$('.searchBtn').click(function(event) {
  $('.results').empty()
//event preventDefault
//get input from user
  var gifSearch = $('.search').val()

  var options = {
    url: 'http://api.giphy.com/v1/gifs/search',
    method: 'get',
    data: {q: gifSearch,
          api_key: 'dc6zaTOxFJmzC',
          offset: 0,
          limit: 10},
    dataType: 'json',
  }
  //show search results - this is the response

  var displayResults = function(response) {

    var gifResponse = response.data
    console.log(gifResponse)

    gifResponse.forEach(function(gif) {
      var output = $("<img>", {
          src: gif.images.fixed_width.url
        });
      $('.results').append($("<tr>")).append($(output));
      }
    )
  }

  $.ajax(options).done(displayResults)

  $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() == $(document).height()) {
        options.data.offset += 10;
        $.ajax(options).done(displayResults);
     }
  });

})
//you can also make an ajax request to omdb api
// $.ajax({
//   url: 'http://omdbapi.com',
// }).done(function(res) {
// moo m om aosdhasjkdh
// })
