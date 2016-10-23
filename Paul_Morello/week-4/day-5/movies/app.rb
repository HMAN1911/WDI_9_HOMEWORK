require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do

  erb :index

end

get '/search' do

  movie = params['movie']

  if movie == nil

    erb :index

  end

  if movie != nil

    result = HTTParty.get('http://omdbapi.com/?t=' + movie)

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
end

get '/about' do

  erb :about

end
