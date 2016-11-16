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

  search = Movie.find_by(title: params[:movie])

  @movie = params['movie']

  result = HTTParty.get('http://omdbapi.com/?t=' + @movie)

  if search.title == @movie
      redirect to "/list_search?movie=#{@movie}"
  end

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

  search_movie = Movie.find_by(title: params[:movie])

  if search_movie.title

    @title = search_movie.title
    @year = search_movie.year
    @released = search_movie.released_year
    @genre = search_movie.genre
    @director = search_movie.director
    @plot = search_movie.plot
    @poster = search_movie.poster
    @rating = search_movie.rating
    @cast = search_movie.actors

    binding.pry

  elsif search_movie.title == nil
      binding.pry
    @movie = params['movie']

    result = HTTParty.get('http://omdbapi.com/?t=' + @movie)

    @title = result["Title"]
    @year = result["Year"]
    @released = result["Released"]
    @genre = result["Genre"]
    @director = result["Director"]
    @plot = result["Plot"]
    @poster = result["Poster"]
    @rating = result["imdbRating"]
    @cast = result["Actors"]

  end

  erb :search

end

get '/about' do

  erb :about

end

# , year: @year, released: @released, genre: @genre, director: @director, plot: @plot, poster: @poster, rating: @rating, cast: @cast
