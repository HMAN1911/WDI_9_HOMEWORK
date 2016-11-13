
  $( "#btnsearch" ).click(function(event) {

    event.preventDefault();  // Prevent the button to send the
    var search = $("#search-box").val(); // #search-box is the text input
    var url_s = "http://omdbapi.com/?s=" + search; //url that searches by title

    var options = {
      method: 'GET',
      url: url_s,
      dataType: 'json',
      success: function(results){
        for (var i = 0; i < results.Search.length; i++) {
          var url_id = "http://omdbapi.com/?i=" + results.Search[i].imdbID; //url that searches by imdbID
          var item = "<h2> <a href='"+ url_id + "' >" + results.Search[i].Title + "</a></h2>"; // each item created
          $(item).appendTo( $(".container") ); // add item to container div
        }
      },
      error: function(error){
        console.log("@ERROR", error);
      }

    };

    $.ajax(options);
    $("#search-box").val('') // clean the input
  });






// $("#search-box").keypress(function(){
//   var search = $("#search-box").val();
//   var url_s = "http://omdbapi.com/?s=" + search;
//   var list_titles = []
//   $.ajax({
//     method:'GET',
//     url: url_s,
//     dataType: 'json',
//     success: function(list_results){
//       for (var i = 0; i < list_results.Search.length; i++) {
//         list_titles.push(list_results.Search[i].Title);
//       }
//     }
//   });
//   $("#search-box").autocomplete({source: list_titles})
// });
