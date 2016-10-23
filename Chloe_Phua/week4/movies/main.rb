require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

get '/about' do
  @info = HTTParty.get('http://omdbapi.com/?t=' + params[:title])
  # @year = HTTParty.get('http://omdbapi.com/?t=' + params[:year])
  @title = @info["Title"]
  @year = @info["Year"]
  @poster = @info["Poster"]

  erb :about
end
