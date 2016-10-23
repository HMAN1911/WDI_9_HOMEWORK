require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'


get '/' do
  @movie = HTTParty.get("http://omdbapi.com/?t=#{params[:search_title]}")
  erb :index
end

get '/about' do
  erb :about
end
