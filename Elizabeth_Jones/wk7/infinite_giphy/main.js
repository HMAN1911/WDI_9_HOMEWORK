// Infinite Giphy
//
// When the user enters a search term, return 10 images from Giphy, and arrange them vertically on the page.
//
// When the user scrolls near to the bottom of the page, load an additional 10 images. And keep going!

//defining the universal settings for the information we need
var settings = {
  url: 'http://api.giphy.com/v1/gifs/search?',
  method: 'get',
  data: {
    api_key: 'dc6zaTOxFJmzC',
    limit: 10 }
}

//loading images on submit using specific settings
//emptying input after search
$("#search-btn").on('click', function(event) {
  event.preventDefault();

  settings.data.q = $('#query').val();
  settings.data.offset = 0;
  $.ajax(settings).done(appendImages);
  $('#query').val('')

});

//loading 10 more images on scroll using different settings
$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
        // ajax call get data from server and append to the div
        settings.data.offset += 10;
        $.ajax(settings).done(appendImages)
    }
});

//attaching the gifs to the html - whether on sumbit or on scroll
function appendImages(res){
    var gifs = res.data;
    gifs.forEach(function(gif){
      console.log(gif.embed_url);
      var $printGif = $('<img>').attr('src', 'https://media.giphy.com/media/' + gif.id + '/giphy.gif').addClass('gif');
      $('#results').append($printGif);
    });
}


//
// $("#search-btn").on('click', function(event) {
//   event.preventDefault();
//   console.log(event.target)
//
//   var input = $('#query').val(); //not jquery because .val() is not a jquery object - important cause call wrong method eg. innerHTML vs .html
//   console.log('movie');

  //
  // var settings = {
  //   url: 'http://api.giphy.com/v1/gifs/search/', //required //can hardcode jaws here first to test
  //   data: { q: input}, //query strings  - can pass in multiple q strings here
  //   method: 'get',    //default optional
  //   dataType: 'json'    //usually auto detected
  // }
