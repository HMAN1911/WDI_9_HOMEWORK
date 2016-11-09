
$("button").click(function(event) {
  // console.log(event.target);
  var search = $(event.target).closest('body').find('input').val();

  var omdbLink = 'http://www.omdbapi.com/?s=' + search

  console.log(omdbLink);

  var options = {
    url: omdbLink,
    method: 'get',
    data: { title: search }
  }
  var showMovies = function(data) {
    for (var i = 0; i < data.Search.length; i++) {
    $( "<h2/>", {
        text: data.Search[i].Title + ' ' + data.Search[i].Year,
      })
      .appendTo( ".search-box" );
  }
    // $('.search-box').append(
    //   $( "</div>" )
    //   .text(data.Search[0].Title + ' ' + data.Search[0].Year) );


    for (var i = 0; i < data.Search.length; i++) {
      console.log(data.Search[i].Title + ' ' + data.Search[i].Year);
    }
  }

  $.ajax(options).done(showMovies);

});

// var $dishPost = $(event.target).closest('.dish-post');
// var $count = $dishPost.find('.footer #left');
// $count.text( data.like_count + " Stars")
