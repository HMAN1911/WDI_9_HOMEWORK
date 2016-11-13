class MoviesController < ApplicationController
  def index
    if session[:user_id].nil?
      redirect_to '/login' if session[:user_id].nil?
    else
      @user_reviews = User.find(session[:user_id]).reviews.order('id DESC').limit(8)
      session[:page] = 0
    end
  end

  def more_movies
    current_count = params[:currentCount]
    if Review.count > current_count.to_i
      session[:page] += 1
      more_reviews = User.find(session[:user_id]).reviews.order('id DESC').limit(8).offset(session[:page] * 8)

      response = {
        allReviews: []
      }

      more_reviews.each do |review|
        single_review = {}
        single_review[:reviewId] = review.id
        single_review[:review] = review.content
        single_review[:stars] = review.stars

        movie = Movie.find(review.movie_id)
        single_review[:title] = movie.title
        single_review[:imageUrl] = movie.image_url

        response[:allReviews] << single_review
      end

      render json: response
    end

  end

  def add_movie
    movie = Movie.find_by(imdbid: params["imdbID"])
    if movie.nil?
      movie = Movie.create(
        title: params["title"],
        year: params["year"],
        image_url: params["imageUrl"],
        imdbid: params["imdbID"],
        director: params["director"],
        actors: params["actors"]
      )
      movie.save
    end
    user = User.find(session[:user_id])
    review = Review.find_by(user_id: user.id, movie_id: movie.id)
    if review.nil?
      user.movies << movie
      review = Review.find_by(user_id: user.id, movie_id: movie.id)
      review.content = params["review"]
      review.stars = params["stars"]
      review.save

      render json: {
        reviewId: review.id,
        title: movie.title,
        imageUrl: movie.image_url,
        review: review.content,
        stars: review.stars,
        type: "new"
      }
    else
      review.update!(content: params["review"])
      review.update!(stars: params["stars"])

      render json: {
        reviewId: review.id,
        type: "update",
        review: review.content,
        stars: review.stars,
      }
    end
  end

  def show_movie
    review = Review.find(params["reviewId"])
    movie = Movie.find(review.movie_id)

    render json: {
      imdbID: movie.imdbid,
      Title: movie.title,
      Poster: movie.image_url,
      Year: movie.year,
      Director: movie.director,
      Actors: movie.actors,
      review: review.content,
      stars: review.stars
    }
  end

  def delete_review
    movie_id = Movie.find_by(imdbid: params[:reviewId]).id
    review_id = Review.find_by(movie_id: movie_id).id
    review = Review.find(review_id)
    review.destroy

    render json: {
      reviewId: review_id
    }
  end
end
