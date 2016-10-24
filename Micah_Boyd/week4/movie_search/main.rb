require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :search
end


get '/result' do

  # /result?search_input=terminator&year=1981

  @search_result = params[:search_input].downcase
  @result = HTTParty.get("http://omdbapi.com/?s=#{@search_result}")
  @movies = @result['Search']
  erb :result

end

get '/detail' do

@imdbID = params[:imdbID]
@detail = HTTParty.get("http://omdbapi.com/?i=#{@imdbID}")


@poster = @detail['Poster']
@meta_thumb = false
@imdb_thumb = false
@meta_score = @detail['Metascore'].to_i
@imdb_score = @detail['imdbRating'].to_f
@thumb_up = 'Hands-Thumb-Up-icon.png'
@thumb_down = 'Hands-Thumb-Down-icon.png'

if @meta_score >= 70
  @meta_thumb = @thumb_up.to_s
end
if @meta_score <= 60
 @meta_thumb = @thumb_down.to_s
end

if @imdb_score > 7
  @imdb_thumb = @thumb_up.to_s
end
if @imdb_score < 6
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
