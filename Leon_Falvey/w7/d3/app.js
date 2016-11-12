$('.search').keypress(function(event) {
  $('.results').html("");

  $.ajax({
      method: "GET",
      url: "http://www.omdbapi.com/?s=" + $('.search').val(),
      dataType: 'json',
      success: function(data){
            console.log(data)
            // var title = data.Title;
            // var text = $( this ).text();
            // for (n in data)
            for (var i=0;i<data.Search.length;i++) {
              $('.results').html($('.results').html()+'<p>'+data.Search[i].Title+'</p>')
            }
        }
    });
})
