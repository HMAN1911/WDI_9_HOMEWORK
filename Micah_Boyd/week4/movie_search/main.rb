require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :search
end

get '/result' do

@search_result = params[:search_input].downcase
@result = HTTParty.get("http://omdbapi.com/?t=#{@search_result}")
@poster = @result['Poster']
@meta_thumb = nil
@imdb_thumb = nil
@meta_score = @result['Metascore'].to_i
@imdb_score = @result['imdbRating'].to_f
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


  erb :result
end
