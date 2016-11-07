require 'httparty'
require 'sinatra'
# require 'sinatra/reloader'
require 'pry'
require_relative 'db_config'
require_relative 'models/search'


get '/' do
  erb :index
end

get '/search' do

  all_title = params['title']
  result = HTTParty.get('http://omdbapi.com/?s='+all_title)

  @all_movies = []

  result["Search"].each do |movie|
    @all_movies.push(movie["Title"])

  end
  erb :search
end

get '/result' do

  title = params['title']

  @movie = Search.find_by(title: title)
  if @movie == nil

  result1 = HTTParty.get('http://omdbapi.com/?t=' + title)


  @movie_title = result1["Title"]

  @year = result1["Year"]

  @runtime = result1["Runtime"]

  @genre = result1["Genre"]

  @director  = result1["Director"]

  @actors = result1["Actors"]

  @image = result1["Poster"]

  @movie = Search.new(title: @movie_title, year: @year, runtime: @runtime, genre: @genre, director: @director, actors: @actors, image: @image)

  @movie.save
  erb :result

  else


    @movie_title = @movie.title
    @year = @movie.year
    @runtime = @movie.runtime
    @genre = @movie.genre
    @director = @movie.director
    @actors = @movie.actors
    @image = @movie.image

    erb :result_database

  end
end
