var giphy_api = "http://api.giphy.com/v1/gifs/search?q=";
var api_key = "&api_key=dc6zaTOxFJmzC";
var search_url;

$( document ).ready(function() {
  $(document).on('click', '#search_btn', function (e) {
    e.preventDefault();
    search = $('#search_req').val().replace(" ", "+");
    console.log(search);
    search_url = giphy_api + search + api_key;
    console.log(search_url);

    var options = {
      url: search_url,
      type: "GET"
    }

    $.ajax(options).done(showResults).fail(callFail);

  });
});


function showResults(data) {
  console.log(data[0]);
};

function callFail() {
  message = "Ooops... something went wrong. Try again later."
  console.log(message);
};
