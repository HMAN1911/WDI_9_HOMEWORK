require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require_relative 'db_config'
require_relative 'models/movie'

get '/' do
  erb :index
end

post '/result' do
  File.open("search_history.txt", 'a') { |f| f << "#{params[:title]}," }
  @search = HTTParty.get "http://omdbapi.com/?s=#{params[:title]}"
  if @search["Error"]
    erb :not_found
  elsif @search["Search"].length == 1
    @info = HTTParty.get "http://omdbapi.com/?i=#{@search["Search"][0]["imdbID"]}"
    erb :movie_info
  else
    @results = @search["Search"].delete_if { |x| x["Poster"] == "N/A" }
    erb :search_result
  end
end

get '/movie_info' do
  @info = HTTParty.get "http://omdbapi.com/?i=#{params[:id]}"
  erb :movie_info
end

get '/about' do
  erb :about
end

get '/history' do
  @history = File.read("search_history.txt").split ","
  erb :history
end

get '/clear' do
  File.open("search_history.txt", 'w') { |f| f << "" }
  redirect "/history"
end

=begin
# Movies 3: Return of Son of Movies

A more more advanced version of the Movies Sinatra App

## Summary

The people at OMDB have complained that our site is making too many requests for Jaws. Update your movies app to store OMDB data in your own local database.

The first time a movie is searched for, your app will put results from OMDB as before. But those results will need to be stored locally so that subsequent requests for the same title can be served from YOUR database, without bothering the OMDB guys again.


Use activereocrd. Seriously
=end
