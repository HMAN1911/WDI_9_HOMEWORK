require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'active_record'
require 'pg'

require_relative 'models/movie.rb'

get '/' do
  erb :search
end

get '/result' do

  @search_result = params[:search_input].downcase
  @result = HTTParty.get("http://omdbapi.com/?s=#{@search_result}")
  @movies = @result['Search']
  erb :result

end

get '/film' do

  if Movie.find_by(imdbid: params[:imdbID])
binding.pry
    movie = Movie.find_by(imdbid: params[:imdbID])

    @meta_score = movie.metascore.to_i
    @imdb_score = movie.imdbRating.to_f
    @imdbID     = movie.imdbid
    @poster     = movie.poster
    @title      = movie.title

    @film_details = {
      'Year'     => movie.year,
      'Rated'    => movie.rated,
      'Released' => movie.released,
      'Runtime'  => movie.runtime,
      'Genre'    => movie.genre,
      'Director' => movie.director,
      'Writer'   => movie.writer,
      'Actors'   => movie.actors,
      'Plot'     => movie.plot,
      'Language' => movie.language,
      'Country'  => movie.country,
      'Awards'   => movie.awards
    }

  else

    film = HTTParty.get("http://omdbapi.com/?i=#{params[:imdbID]}")

    @meta_score = film['Metascore'].to_i
    @imdb_score = film['imdbRating'].to_f
    @imdbID     = film['imdbID']
    @poster     = film['Poster']
    @title      = film['Title']

    @film_details = {
      'Year'     => film['Year'],
      'Rated'    => film['Rated'],
      'Released' => film['Released'],
      'Runtime'  => film['Runtime'],
      'Genre'    => film['Genre'],
      'Director' => film['Director'],
      'Writer'   => film['Writer'],
      'Actors'   => film['Actors'],
      'Plot'     => film['Plot'],
      'Language' => film['Language'],
      'Country'  => film['Country'],
      'Awards'   => film['Awards']
    }

    new_movie = Movie.new

    new_movie.each do |key|
      if key == 'imdbid'
        value = @imdbID
      elsif key == 'imdbrating'
        value = @imdbRating
      else
        value = @film["#{key.capitalize}"]
      end
    end

    new_movie.save

    # @new_movie.title      =
    # @new_movie.imdbid     =
    # @new_movie.year       =
    # @new_movie.rated      =
    # @new_movie.released   =
    # @new_movie.runtime    =
    # @new_movie.genre      =
    # @new_movie.director   =
    # @new_movie.writer     =
    # @new_movie.actors     =
    # @new_movie.plot       =
    # @new_movie.language   =
    # @new_movie.country    =
    # @new_movie.awards     =
    # @new_movie.imdbrating =
    # @new_movie.metascore  =
    # @new_movie.poster     =


  end

  @meta_thumb = false
  @imdb_thumb = false
  @thumb_up = 'Hands-Thumb-Up-icon.png'
  @thumb_down = 'Hands-Thumb-Down-icon.png'

  if @meta_score >= 70
    @meta_thumb = @thumb_up.to_s
  end
  if @meta_score <= 60
   @meta_thumb = @thumb_down.to_s
  end

  if @imdb_score >= 7.0
    @imdb_thumb = @thumb_up.to_s
  end
  if @imdb_score <= 6.0
    @imdb_thumb = @thumb_down.to_s
  end

  if @meta_score == 0
    @meta_score = false
  end
  if @imdb_score == 0
    @imdb_score = false
  end

  erb :film
end
