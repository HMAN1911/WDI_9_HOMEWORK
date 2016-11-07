require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pg'
require_relative 'db_config'
require_relative 'models/movie'
require_relative 'models/search'
require_relative 'models/movie_cache'

def get_movie(search)
  movie_search = search
  movie_title = movie_search[0..movie_search.length-5]
  movie_year =  movie_search[movie_search.length-4..-1]
  safeURI = URI.escape("http://omdbapi.com/?t=#{movie_title}&y=#{movie_year}")
  result = HTTParty.get(safeURI)
end

def get_movie_local(search)
  movie_search = search
  movie_title = movie_search[0..movie_search.length-5]
  movie_year =  movie_search[movie_search.length-4..-1].to_i
  result = MovieCache.where(title: movie_title, year: movie_year).first
end

get '/' do
  @placeholder = "<Find New Movie>"
  redirect to '/my-movies'
end

get '/search' do
  find_input = params["find-movie"]
  new_search = Search.new
  new_search.term = find_input
  new_search.save
  @placeholder = find_input
  safeURI = URI.escape("http://omdbapi.com/?s=#{find_input}")
  @search_results = HTTParty.get(safeURI)["Search"]
  redirect to "/" if @search_results.nil?
  if @search_results.length == 1
    safeURI = URI.escape("/#{@search_results[0]['Title']}#{@search_results[0]['Year']}")
    redirect to "/movie/#{safeURI}"
  end
  erb :results
end

get '/movie/:title' do
  @placeholder = "<Find New Movie>"
  @result = get_movie_local(params[:title])
  if @result.nil?
    @result = get_movie(params[:title])
    if @result["Response"] == "False"
      redirect to "/"
    else
      new_movie_cache = MovieCache.new
      new_movie_cache.title = @result["Title"]
      new_movie_cache.year = @result["Year"]
      new_movie_cache.rated = @result["Rated"]
      new_movie_cache.released = @result["Released"]
      new_movie_cache.runtime = @result["Runtime"]
      new_movie_cache.genre = @result["Genre"]
      new_movie_cache.director = @result["Director"]
      new_movie_cache.writer = @result["Writer"]
      new_movie_cache.actors = @result["Actors"]
      new_movie_cache.plot = @result["Plot"]
      new_movie_cache.awards = @result["Awards"]
      new_movie_cache.poster = @result["Poster"]
      new_movie_cache.imdbrating = @result["imdbRating"]
      new_movie_cache.save
    end
  else
    @result = @result.attributes
    @result = @result.map {|k, v| [k.capitalize, v] }.to_h
  end

  posterUrl = @result["Poster"]
  posterUrl == "N/A" ? @posterSrc = "https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97450&w=300&h=450" : @posterSrc = posterUrl

  erb :movie
end

get '/history' do
  @placeholder = "<Find New Movie>"
  @search_history = Search.all
  erb :history
end

get '/my-movies' do
  @placeholder = "<Find New Movie>"
  @movies = Movie.order('id')
  erb :my_movies
end

get '/add-movie/:title' do
  @placeholder = "<Find New Movie>"
  @result = get_movie(params[:title])
  posterUrl = @result["Poster"]
  posterUrl == "N/A" ? @posterSrc = "https://placeholdit.imgix.net/~text?txtsize=28&txt=300%C3%97450&w=300&h=450" : @posterSrc = posterUrl
  erb :add_movie
end

post '/add-movie' do
  params['image-url'] == 'N/A' ? image_url = 'https://placeholdit.imgix.net/~text?txtsize=19&txt=200%C3%97300&w=200&h=300' : image_url = params['image-url']
  new_movie = Movie.new
  new_movie.title = params['title']
  new_movie.year = params['year']
  new_movie.review = params['review']
  new_movie.stars = params['stars']
  new_movie.image_url = image_url
  new_movie.save

  redirect to '/'
end

get '/edit-movie/:id' do
  @placeholder = "<Find New Movie>"
  @result = Movie.find(params['id'])
  erb :edit_movie
end

post '/edit-movie/:id' do
  movie = Movie.find(params['id'])
  movie.stars = params['stars']
  movie.review = params['review']
  movie.save
  redirect to '/'
end

post '/delete-movie/:id' do
  Movie.find(params['id']).destroy
  redirect '/'
end
