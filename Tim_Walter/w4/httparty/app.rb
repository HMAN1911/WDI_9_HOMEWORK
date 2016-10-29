require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require_relative 'db_config'
require_relative 'models/movie'


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
  # binding.pry
  # does movie exist in our database?
  @imdbID = params[:imdbID] #movie requested id
  movie_search = Movie.find_by(imdbid: @imdbID)

  if movie_search
    # get movie details from our database
    @imdbID = movie_search.imdbid
    @name = movie_search.name
    @year = movie_search.year
    @poster = movie_search.poster
    @duration = movie_search.duration
    @genre = movie_search.genre
    @director = movie_search.director
    @language = movie_search.language
    @awards = movie_search.awards
    @metascore = movie_search.metascore
    @imdbRating = movie_search.imdbrating
    @imdbVotes = movie_search.imdbvotes
    @plot = movie_search.plot
    @writer = movie_search.writer
    @cached = true

  else
    # if not get movie add to our db
    @movie_requested = HTTParty.get("http://www.omdbapi.com/?i=#{params[:imdbID]}")

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

    movie = Movie.new
    movie.name = @name
    movie.year = @year
    movie.poster = @poster
    movie.duration = @duration
    movie.genre = @genre
    movie.director = @director
    movie.language = @language
    movie.awards = @awards
    movie.metascore = @metascore
    movie.imdbrating = @imdbRating
    movie.imdbvotes = @imdbVotes
    movie.imdbid = @imdbID
    movie.plot = @plot
    movie.writer = @writer
    movie.omdb_link = "http://www.omdbapi.com/?i=#{params[:imdbID]}"
    if !movie.save
      erb :error
    end
  end
  erb :about
end

get '/list' do
  # capture movie info
  @title = params[:title]
  @movie_requested = HTTParty.get("http://www.omdbapi.com/?s=#{@title}")
  if @movie_requested['Response'] == 'True'
    if @movie_requested['Search'].length > 1
      erb :list
    else
      erb :find
    end
  elsif @movie_requested['Response'] == 'False'
    # binding.pry
    erb :nolisting
  end
end
