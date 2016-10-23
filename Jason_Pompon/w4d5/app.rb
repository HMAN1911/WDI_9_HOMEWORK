require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/about' do
  title = params[:movie]
  result = HTTParty.get('http://omdbapi.com/?t=' + title + "'")
  @title = result["Title"]
  @year = result ["Year"]
  @rated = result["Rated"]
  @released = result["Released"]
  @runtime = result["Runtime"]
  @genre = result["Genre"]
  @director = result["Director"]
  @writer = result["Writer"]
  @actors = result["Actors"]
  @plot = result["Plot"]
  @language = result["Language"]
  @country = result["Country"]
  @awards = result["Awards"]
  @poster = result["Poster"]
  @metascore = result["Metascore"]
  @imdbRating = result["imdbRating"]
  @imdbVotes = result["imdbVotes"]
  @imdbID = result['imdbID']
  @type = result["Type"]
  erb :about
end
