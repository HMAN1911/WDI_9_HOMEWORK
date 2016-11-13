console.log('its working')

$q = $('#q');
$resultsDIv = $('#search-results');

$('#search-btn').on('click', function(event) {
  event.preventDefault();

  console.log($q.val());

  var options = {
    url: '',
    method: '',
    data: ''
  }

  var showResults = function(response) {
    // append 10 giphy images to div
  }

  // $.ajax(options).done(showResults);
})
