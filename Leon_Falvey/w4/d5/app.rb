require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


# HTTParty.get('http://omdbapi.com/?t=once')

get '/' do

  erb :index
end

get '/about' do
  @result = HTTParty.get("http://omdbapi.com/?t=#{params[:title]}&plot=full&r=json")

  if @result[:Response] == "True"
    @title = @result["Title"]
    erb :about
  else
    erb :index
end
