require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  if params.length > 0
    route = "http://omdbapi.com/?t=#{params[:title]}"
    @result = HTTParty.get(route)
    p @result
  else
    @result = nil
  end
  erb :index
end

get '/about' do
  erb :about
end
