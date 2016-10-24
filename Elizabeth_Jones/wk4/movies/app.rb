require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/index' do
  erb :index
end

get '/about' do
  @user_input = params[:movies]
  @movie = HTTParty.get('http://omdbapi.com/?t=' + "#{@user_input}")
  @movie_title = 'Title: ' + @movie["Title"]
  @movie_director = 'Director: ' + @movie["Director"]
  @movie_year = 'Year: ' + @movie["Year"]
  @movie_plot = 'Plot: ' + @movie["Plot"]
  @movie_rated = 'Rating: ' + @movie["Rated"]
  @movie_actors = 'Actors: ' +  @movie["Actors"]

  @movie_poster = @movie["Poster"]

  @movie_array = []
  @movie_array = @movie_array.push(@movie_title, @movie_director, @movie_year, @movie_plot, @movie_rated, @movies_actors)

  @message = ""
  erb :about
end
