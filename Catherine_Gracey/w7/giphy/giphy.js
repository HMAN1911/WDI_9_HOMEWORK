var fetching = false;

function loadGifs(event){
  if (!fetching){
    var term = $('#search-input').val();
    fetching = true;
    // var search = {
    //   url: 'http://api.giphy.com/v1/gifs/search',
    //   method: 'get',
    //   data: {
    //     api_key: 'dc6zaTOxFJmzC',
    //     q: term,
    //     limit: 10,
    //     fmt: 'json'
    //   }
    // };
    // $.ajax(search).done(function(response){
    //   console.log(response)
    //   for (var i = 0; i < response.data.length; i++){
    //     $('<img src="' + response.data[i].images.original.url + '">').appendTo( $('#gifs') );
    //     console.log(response.data[i].images.original.url)
    //   }
    // });
    var random = {
      url: 'http://api.giphy.com/v1/gifs/random',
      method: 'get',
      data: {
        api_key: 'dc6zaTOxFJmzC',
        tag: term,
        fmt: 'json'
      }
    };
    for (var i = 0; i < 10; i++){
      $.ajax(random).done(function(response){
        console.log(response)
        setTimeout(function(){ fetching = false; }, 400);
        $('<img src="' + response.data.image_url + '">').appendTo( $('#gifs') );
      });
    }
  }
}
function heights(){
  console.log("$(window).scrollTop()", $(window).scrollTop())
  console.log("$(window).height()", $(window).height())
  console.log("$(document).height()", $(document).height())
}
$(document).ready( function(){
    $('#search-btn').on("click", loadGifs);
    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() >= $(document).height()-200) {
           loadGifs();
       }
    });
  }
);
