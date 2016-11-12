require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require 'pry'
require_relative 'db_config'
require_relative 'models/movie'

get '/' do
  erb :index
end

get '/about' do
  movie_id = params[:movie_id]
  if !Movie.find_by(imdb_id: movie_id)
    link = 'http://www.omdbapi.com/?i=' + movie_id
    info = HTTParty.get(link)
    movie1 = Movie.new
    movie1.title = info['Title']
    movie1.year = info['Year']
    movie1.rated = info['Rated']
    movie1.poster_url = info['Poster']
    movie1.runtime = info['Runtime']
    movie1.genre = info['Genre']
    movie1.director = info['Director']
    movie1.writer = info['Writer']
    movie1.actors = info['Actors']
    movie1.plot = info['Plot']
    movie1.country = info['Country']
    movie1.awards = info['Awards']
    movie1.imdb_rating = info['imdbRating']
    movie1.metascore = info['Metascore']
    movie1.save
  end
  @info = Movie.find_by(imdb_id: movie_id)
  erb :about
end

get '/details' do
  @movie_name = params[:movie].strip

  @result = HTTParty.get('http://omdbapi.com/?s=' + @movie_name)
  if @result['Response'] == 'False'
    erb :details
  elsif @result['Search'].length == 1
    redirect "/about?movie_name=#{@result['Search'][0]['Title']}"
  elsif @result['Search'].length > 1
    erb :details
  end
end

# get 'index' do
#   erb :index
# end
