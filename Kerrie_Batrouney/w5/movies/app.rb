require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require_relative 'db_config'
require_relative 'models/movie'

get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/search' do
  movie = params[:movie_name]
  multiresult = HTTParty.get("http://omdbapi.com/?s=#{movie}")
  @movies = multiresult["Search"]
  erb :options
end

get '/get_movie' do
    movie = params[:movie_name]
    # if movie selected is already in the localmovies database, then pull data from database,  otherwise get it from the API
  if Movie.find_by(title: movie)
    # yes its in the database, get data from there
    movie_from_store = Movie.find_by(title: movie)
    @movie_title = movie_from_store.title
    @movie_plot = movie_from_store.plot
    @movie_poster = movie_from_store.poster
    @movie_year = movie_from_store.year
    @rating = movie_from_store.rating
    @cast = movie_from_store.actors
    @director = movie_from_store.director
  else
    # no its not in the database, get it from API then store in database
    result = HTTParty.get("http://omdbapi.com/?t=#{movie}")
# binding.pry
    if result["Response"] == "False"
      @error = result["Error"]
      # use page error showing error message
      erb :error
    else
      # use std page
      @movie_title = result["Title"]
      @movie_plot = result["Plot"]
      @movie_poster = result["Poster"]
      @movie_year = result["Year"]
      @rating = result["Rated"]
      @cast = result["Actors"]
      @director = result["Director"]

# store results in local movies database

      movie_to_store = Movie.new
      movie_to_store.title = @movie_title
      movie_to_store.plot = @movie_plot
      movie_to_store.poster = @movie_poster
      movie_to_store.year = @movie_year
      movie_to_store.rating = @rating
      movie_to_store.director = @director
      movie_to_store.actors = @cast

      movie_to_store.save
  
    end
  end
  erb :index
end
