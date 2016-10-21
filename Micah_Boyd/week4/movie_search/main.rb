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
  erb :result
end
