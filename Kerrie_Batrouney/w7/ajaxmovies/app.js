// DTs solution
console.log('ajax movies');

$('#search_btn').on('click', function() {
$('#list').empty(); //wipes out previous list so it is not appended to
//get input from user
var input = $("#q").val();
var settings = {
  url: 'http://omdbapi.com/', //required
  data: { s: input},
  method: 'GET', //default optional
  dataType: 'json' // usually auto detected
}

//make an ajax request to omdb api
$.ajax(settings).done(function(response){
  // debugger
  console.log('response')

var movies = response.Search;
movies.forEach(function(movie){
  console.log(movie.Title);

  var $h2 = $('<h2>').text(movie.Title);

  var $link = $('<a>')
  .attr('target', '_blank')
  .attr('href', 'http://www.imdb.com/title/' + movie.imdbID);

  $link.append($h2);

  $('#list').append($link);
  //or can use $link.appendTo('#list');

})
//above loop equivalent to  movies.each do |movie|
});
});




























// $(button).on('click', function(event){
//   event.preventDefault();
//   console.log(event.target);
//
// var movie = $('#search').val;
// var options = {
//   baseURL: 'http://omdbapi.com/?s=jaws',
//   method: 'get'
//   };
//
//
// var update = function(data) {
//   var title = options.search[1].title;
//     console.log('yay');
//     console.log(data);
//
//    }
//
// $.ajax(options).done(update); //does function updateCount
//
//
// });

// var options = axios.create({
//   baseURL: 'http://omdbapi.com/?s=jaws',
//   method: 'get'
//   });
//   console.log(options);
// //
// // var options = {
// //   axios.get("http://omdbapi.com/?s=jaws");
//
//     // url: '/likes',
//     // method: 'post',
//     // data: {dish_id: dish_id}
//   // }
//
// var updateCount = function(response) {
//   var title = data.search[1].title;
//     console.log('yay');
//     console.log(response);
// // $count.text(parseInt($count.text())+1);
// //     $count.text(response.like_count);
//    }
//
// ajax(options).done(updateCount); //does function updateCount
//
//
// var movies = axios.get("http://omdbapi.com/?s=jaws")
// .then(function (response) {
//   for (i=0; i<results.search.length10; i++){
//     console.log(response);
//     var $title = results.search[i].title;
//     console.log($title);
//
//   }});

  // .catch(function (error) {
  //   console.log(error);
  // });

//   var $movie = $movie_name
//     var multiresult = HTTParty.get("http://omdbapi.com/?s=$movie")
//     // var @movies = multiresult["Search"]
//   // erb :options
// console.log($movie);
// console.log(multiresult);
// console.log($movies);
//  var multiresult = axios.get("http://omdbapi.com/?s=jaws");
// console.log(multiresult);
// $('button').on('click', function(event) {
//   event.preventDefault();
//
//   // from the target we need to traverse the dom to find the dearest div with the class count
//   //to use closest and find which are jQuery functions
//   // I need to turn even.target from a simple dom element to a jQuery object
//   // look up for .dishcard
//   var $movie = $(event.target).closest('.dishcard');
//     // from $dish look down for .count
//   var $count = $dish.find('.count');
//
//   var dish_id = $dish.data('dish-id');
//
//   var options = {
//     url: '/likes',
//     method: 'post',
//     data: {dish_id: dish_id}
//   }
//
//
//
//   var updateCount = function(response) {
//     console.log('yay');
//     console.log(response);
//
//     // $count.text(parseInt($count.text())+1);
//     $count.text(response.like_count);
//   }
//
//   $.ajax(options).done(updateCount); //does function updateCount
//
// });
