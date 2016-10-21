require 'sinatra'
require 'httparty'
require 'pry'

# Retrieve movie data from OMDB API
def get_movie_data(title)
  HTTParty.get("http://omdbapi.com/?t=#{title}")
end

get '/' do
  @title = params[:title]

  if @title != nil
    @movie = get_movie_data(@title)
    erb :about
  else
    erb :index
  end
end

binding.pry
