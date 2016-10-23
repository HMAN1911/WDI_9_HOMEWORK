require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end



get '/find' do
  # capture movie info
  @title = params[:title]
  @movie_requested = HTTParty.get("http://www.omdbapi.com/?t=#{@title}")
  @name = @movie_requested["Title"]
  @year = @movie_requested["Year"]
  @poster = @movie_requested["Poster"]
  @duration = @movie_requested["Runtime"]
  @genre = @movie_requested["Genre"]
  @director = @movie_requested["Director"]
  @language = @movie_requested["Language"]
  @awards = @movie_requested["Awards"]
  @metascore = @movie_requested["Metascore"]
  @imdbRating = @movie_requested["imdbRating"]
  @imdbVotes = @movie_requested["imdbVotes"]
  @imdbID = @movie_requested["imdbID"]
  @plot = @movie_requested["Plot"]
  @writer = @movie_requested["Writer"]

  erb :about
end
