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


get '/show' do
  # capture movie info

  @movie_requested = HTTParty.get("http://www.omdbapi.com/?i=#{params[:imdbID]}")
  # params pulls out what is passed in the url.

  @imdbID = @movie_requested["imdbID"]
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
  @plot = @movie_requested["Plot"]
  @writer = @movie_requested["Writer"]

  erb :about
end

get '/list' do
  # capture movie info
  @title = params[:title]
  @movie_requested = HTTParty.get("http://www.omdbapi.com/?s=#{@title}")
  if @movie_requested['Response'] == 'True'
    # binding.pry
    if @movie_requested['Search'].length > 1
      # binding.pry
      erb :list
    else
      erb :find
    end
  elsif @movie_requested['Response'] == 'False'
    # binding.pry
    erb :nolisting
  end
end
