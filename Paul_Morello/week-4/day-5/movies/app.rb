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

  search = Movie.all
  binding.pry
  search.each do |movie|
    binding.pry
    if movie.title == search[0].title

      @title = search[0].title
      @year = search[0].year
      @released = search[0].released_year
      @genre = search[0].genre
      @director = search[0].director
      @plot = search[0].plot
      @poster = search[0].poster
      @rating = search[0].rating
      @cast = search[0].actors

    binding.pry
      return
    end

  end

  if movie.title != search[0].title

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
