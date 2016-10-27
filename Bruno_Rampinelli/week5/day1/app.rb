require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'


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

  result1 = HTTParty.get('http://omdbapi.com/?t=' + title)


  @movie_title = result1["Title"]

  @year = result1["Year"]

  @runtime = result1["Runtime"]

  @genre = result1["Genre"]

  @director  = result1["Director"]

  @actors = result1["Actors"]

  @image = result1["Poster"]


  erb :result

end
