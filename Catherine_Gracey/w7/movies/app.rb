require 'sinatra'
require "sinatra/json"
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :index
end

get '/search' do
  search = "http://omdbapi.com/?s=#{params[:search]}"
  result = HTTParty.get(search)
  json :results => result
end

get '/movie' do
  search = "http://omdbapi.com/?i=#{params[:imdb]}"
  result = HTTParty.get(search)
  # json :results => result
end
