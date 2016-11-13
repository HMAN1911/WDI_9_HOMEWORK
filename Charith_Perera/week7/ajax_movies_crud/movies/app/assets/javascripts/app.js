$(document).ready(function() {

  $(window).scroll(function(){
     if ($(window).scrollTop() == ($(document).height() - $(window).height())) {
       moreMovies();
     }
  })

  $(".btn-search").click(function() {
    $(".movie").empty();
    $(".results").empty();
    var searchTerm = $(".search-term").val();
    $.ajax({
      url: 'http://omdbapi.com/?s=' + searchTerm,
      method: 'get'
    })
    .done(function(response) {
      if (response.Response !== "False") {
        var results = response.Search;
        buildResults(results);
      }
    })
  });

  $(".results").click("li", function(e) {
    var imdbID = $(e.target).attr('data-id');
    $(".btn-delete").hide();
    $(".btn-review").text("Add");
    $(".movie").show();
    $.ajax({
      url: 'http://www.omdbapi.com/?i=' + imdbID + '&plot=short&r=json',
      method: 'get'
    })
    .done(function(response) {
      showMovie(response)
    });
  })

  $(".movie").click("button", function(e) {
    $(".add-movie").show();
  })

  $(".add-movie").on("click", ".btn-review", function(e) {
    $(".add-movie").hide();
    $.ajax({
      url: "/add-movie",
      method: "post",
      data: {
        title: $(".title").text(),
        year: $(".year").text(),
        imageUrl: $(".image-url").attr("src"),
        imdbID: $(".title").attr("data-id"),
        review: $(".review").val(),
        stars: $(".stars").val(),
        director: $(".director").text(),
        actors: $(".actors").text()
      }
    })
    .done(function(response) {
      if (response.type == "new") {
        $("<li class='single-movie' data-id='" + response.reviewId + "'><div><h3>" + response.title + "</h3><img src='" + response.imageUrl + "'></div><p>" + response.review + "</p><p>" + response.stars + "</p></li>").prependTo(".movies-list")
      }
      else {
        $(".movie").hide();
        var updateMovie = $(".movies-list").find("[data-id='" + response.reviewId + "']");
        updateMovie.find(".single-review").text(response.review);
        updateMovie.find(".single-stars").text(response.stars);
      }
      $(".movie").hide();
    });
  });

  $(".add-movie").on("click", ".btn-delete", function(e) {
    $(".add-movie").hide();
    $.ajax({
      url: "/delete-review",
      method: "delete",
      data: {
        reviewId: $(e.target).parents().find(".title").attr("data-id")
      }
    })
    .done(function(response) {
      $(".add-movie").hide();
      $('.movies-list .single-movie[data-id="' + response.reviewId + '"]').remove();
    });
  });

  $(".movies-list").on("click", "li", function(e) {
    $(".btn-delete").show();
    $(".btn-review").text("Update");
    $.ajax({
      url: '/show-movie',
      method: 'get',
      data: {
        reviewId: $(e.target).closest("li").attr("data-id")
      }
    })
    .done(function(response) {
      showMovie(response);
      showReviewInput(response);
    });
  })

  function buildResults(results) {

    for (var i = 0; i < results.length; i++) {
      $(".results").append("<li data-id='" + results[i].imdbID +"'>" + results[i].Title + "</li>")
    }
  }

  function showMovie(result) {
      $(".movie").empty();
      $(".movie").append("<h2 class='title' data-id='" + result.imdbID + "'><a target='_blank' href='http://www.imdb.com/title/" + result.imdbID + "/'>" + result.Title +"</a></h2");

      $("<button>", {
        text: "Add to my Collection",
        class: "btn-add-movie"
      }).appendTo(".movie");

      if (result.Poster !== "N/A") {
        $(".movie").append("<img class='image-url' src='" + result.Poster + "'>");
      }
      $(".movie").append("<h3 class='year'>" + result.Year + "</h3>");
      $(".movie").append("<p class='director'>" + result.Director + "</p>")
      $(".movie").append("<p class='actors'>" + result.Actors + "</p>")
      $(".movie").show();
  }

  function showReviewInput(response) {
    $(".add-movie").show();
    $(".add-movie .review").val(response.review);
    $(".add-movie .stars").val(response.stars);
  }

  $(".btn-search").click();
});

function moreMovies() {
  $.ajax({
    url: '/more-reviews',
    method: 'get',
    data: {
      currentCount: $(".movies-list li").size()
    }
  })
  .done(function(response){
    var allReviews = response.allReviews
    for (var i = 0; i < allReviews.length; i++) {
      $("<li class='single-movie' data-id='" + allReviews[i].reviewId + "'><div><h3>" + allReviews[i].title + "</h3><img src='" + allReviews[i].imageUrl + "'></div><p>" + allReviews[i].review + "</p><p>" + allReviews[i].stars + "</p></li>").appendTo(".movies-list")
    }
  })
}
