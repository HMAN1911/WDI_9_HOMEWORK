require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require_relative 'db_config'
require_relative 'models/movie'

# Search history file
HISTFILE = 'search_history.txt'

def record_search(query)
  File.open(HISTFILE, 'a') do |file|
    file.write("#{Time.new.to_s},#{query}\n")
  end
end

get '/' do
  @query = params[:query]

  if @query != nil
    record_search(@query)

    results = HTTParty.get("http://omdbapi.com/?s=#{@query}")
    if (results["Response"] == "True")
      # If only one result found, redirect to info page
      if results["totalResults"].to_i == 1
        movie_title = results["Search"].first["Title"]
        redirect to "/info?title=#{movie_title}"
      # Else, print result list
      else
        @movies = results["Search"]
        erb :index
      end
    else
      @error = results["Error"]
      erb :error
    end
  else
    erb :index
  end
end

get '/info' do
  @query = params[:title]
  # Load movie data from local DB if exists
  @movie = Movie.find_by(title: params[:title])
  # If movie not found, load OMDB API data
  # and save to local database
  if !@movie
    result = HTTParty.get("http://omdbapi.com/?t=#{@query}")
    if (result['Response'] == 'True')
      @movie = Movie.new
      @movie.title = result['Title']
      @movie.plot = result['Plot']
      @movie.director = result['Director']
      @movie.writer = result['Writer']
      @movie.actor = result['Actors']
      @movie.awards = result['Awards']
      @movie.metascore = result['Metascore']
      @movie.imdb_rating = result['imdbRating']
      @movie.poster = result['Poster']
      @movie.released = result['Released']
      @movie.genre = result['Genre']
      @movie.runtime = result['Runtime']
      @movie.save
    else
      @error = result['Error']
      return erb :error
    end
  end

  erb :about
end

get '/history' do
  @history = []
  if File.exists?(HISTFILE)
    File.open(HISTFILE) do |file|
      file.readlines.each do |line|
        line = line.chomp.split(',')

        @history.push({
          "time" => line[0],
          "query" => line[1]
        })
      end
    end
  end

  erb :history
end

# binding.pry
