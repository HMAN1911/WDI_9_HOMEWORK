require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
# require 'pry'

get '/' do

  erb :index

end

get '/search' do

  title = params['title']

  result = HTTParty.get('http://omdbapi.com/?t=' + title)


  @movie_title = result["Title"]

  @year = result["Year"]

  @runtime = result["Runtime"]

  @genre = result["Genre"]

  @director  = result["Director"]

  @actors = result["Actors"]

  @image = result["Poster"]


  erb :result

end

# binding.pry
