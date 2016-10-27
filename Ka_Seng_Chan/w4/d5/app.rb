require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
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
    movie_data = HTTParty.get(link)
    m1 = Movie.new
    m1.title = movie_data['Title']
    m1.year = movie_data['Year']
    m1.released = movie_data['Released']
    m1.runtime = movie_data['Runtime']
    m1.genre = movie_data['Genre']
    m1.director = movie_data['Director']
    m1.writer = movie_data['Writer']
    m1.actors = movie_data['Actors']
    m1.plot = movie_data['Plot']
    m1.language = movie_data['Language']
    m1.country = movie_data['Country']
    m1.awards = movie_data['Awards']
    m1.poster_url = movie_data['Poster']
    m1.metascore = movie_data['Metascore']
    m1.imdb_rating = movie_data['imdbRating']
    m1.imdb_votes = movie_data['imdbVotes']
    m1.imdb_id = movie_data['imdbID']
    m1.rated = movie_data['Rated']
    m1.save
  end
    @movie_data = Movie.find_by(imdb_id: movie_id)

  erb :about
end

get '/find' do
  @movie = params[:movie].strip
  @results = HTTParty.get('http://www.omdbapi.com/?s=' + @movie)
  if @results["Response"] == "False"
    erb :find
  elsif @results['Search'].length == 1
    redirect "/about?movie=#{@results['Search'][0]['Title']}"
  elsif @results['Search'].length > 1
    erb :find
  end
end
