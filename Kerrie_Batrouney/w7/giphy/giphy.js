console.log('Giphy search');

// #javascript, jQuery
// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });


$('#search-btn').on('click', function() {

  // empty child elem within #list
  $('#list').empty();

  // get input from user
  var input = $('#q').val();
  var offset = 0;
 // debugger;

  var settings = {
    url: "http://api.giphy.com/v1/gifs/search", // required
    data: {q: input, api_key: "dc6zaTOxFJmzC", limit: 10, offset: offset},
    method: 'get',
    fmt: 'JSONP' // usually auto detected
  };
  //  debugger;
console.log(settings);

  // var getResults = function(){
  //   var giphys = res.data;
  //   giphys.forEach(displayResults(giphy));
  // }
  //
  // var displayResults = function (){
  //   var $pic = $('<img>').attr('src', giphy.images.fixed_height.url);
  //   $('#list').append($pic);
  //   $('#list').append($('<br>'));
  // }

  // make an ajax request to giphy api, display 10 results


  $.ajax(settings).done(function(res) {
    var giphys = res.data;
    giphys.forEach(function(giphy){
      var $pic = $('<img>').attr('src', giphy.images.fixed_height.url);
      $('#list').append($pic);
      $('#list').append($('<br>'));
    });
  });

//as user scrolls to bottom, reset the offset and get more results from database and display them.
  $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() == $(document).height()) {
         settings.data.offset = settings.data.offset + 10;
         $.ajax(settings).done(function(res) {
           var giphys = res.data;
           giphys.forEach(function(giphy){
             var $pic = $('<img>').attr('src', giphy.images.fixed_height.url);
             $('#list').append($pic);
             $('#list').append($('<br>'));
           });

         });
     }
  });


});
