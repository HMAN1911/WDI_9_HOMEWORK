require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'active_record'

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

get '/detail' do

  @imdbID = params[:imdbID]
  @detail = HTTParty.get("http://omdbapi.com/?i=#{@imdbID}")

  @meta_thumb = false
  @imdb_thumb = false
  @meta_score = @detail['Metascore'].to_i
  @imdb_score = @detail['imdbRating'].to_f
  @thumb_up = 'Hands-Thumb-Up-icon.png'
  @thumb_down = 'Hands-Thumb-Down-icon.png'

  @poster = @detail['Poster']
  @title = @detail['Title']
  @imdbID = @detail['imdbID']
  @year = @detail['Year']
  @rated = @detail['Rated']
  @released = @detail['Released']
  @runtime = @detail['Runtime']
  @director = @detail['Director']
  @writer = @detail['Writer']
  @actors = @detail['Actors']
  @plot = @detail['Plot']
  @language = @detail['Language']
  @country = @detail['Country']
  @awards = @detail['Awards']














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




  erb :detail
end
