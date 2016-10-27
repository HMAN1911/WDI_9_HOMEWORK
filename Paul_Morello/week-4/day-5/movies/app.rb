require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require_relative 'db_config'
require_relative 'models/movie'


get '/' do

  erb :index

end

post '/movie' do

  search = Movie.all

  @movie = params['movie']

  result = HTTParty.get('http://omdbapi.com/?t=' + @movie)

  search.each do |movie|
    if movie.title == @movie
      redirect to "/list_search?movie=#{@movie}"
    end
  end

  binding.pry

  Movie.create(title: params['movie'], year: params['Year'], released_year: params['Released'], genre: result["Genre"], director: result["Director"], plot: result["Plot"], poster: result["Poster"], rating: result["imdbRating"], actors: result["Actors"])

  redirect to "/search?movie=#{@movie}"

end

get '/list_search' do

  @movie = params['movie']

  result = HTTParty.get('http://omdbapi.com/?s=' + @movie)

  binding.pry

  if result['Search'].count > 1

        @list_search = result['Search']

  end

  if result['Search'].count == 1

    binding.pry

    redirect to "/search?movie=#{@movie}"

  end

  erb :list_search

end

get '/search' do

  @movie = params['movie']

  result = HTTParty.get('http://omdbapi.com/?t=' + @movie)

  search.each do |movie|
    if movie.title == @movie
      @movies_displayed = Movie.find_by(id: params[:id])
    end

    elsif movie.title != @movie

  @title = result["Title"]
  @year = result["Year"]
  @released = result["Released"]
  @genre = result["Genre"]
  @director = result["Director"]
  @plot = result["Plot"]
  @poster = result["Poster"]
  @rating = result["imdbRating"]
  @cast = result["Actors"]

  erb :search

end

get '/about' do

  erb :about

end

# , year: @year, released: @released, genre: @genre, director: @director, plot: @plot, poster: @poster, rating: @rating, cast: @cast
