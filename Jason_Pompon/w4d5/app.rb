require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/list' do
  title = params[:movie]
  open('history/search_history.txt', 'a') do |f|
      f << "#{title}\n"
  end
  result = HTTParty.get('http://omdbapi.com/?s=' + title + "'")
  @list = result["Search"]
  if @list.length == 1
    redirect to "/about?movie=#{title}"
  else
    erb :list
  end
end

get '/about' do
  title = params[:movie]
  open('history/search_history.txt', 'a') do |f|
      f << "#{title}\n"
  end
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
