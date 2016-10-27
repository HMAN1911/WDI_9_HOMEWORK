require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :index
end

get '/search' do # Search for keyword, list multiple results.
  flick_search = params[:flicksearch].to_s
  @search = HTTParty.get("http://omdbapi.com/?s=#{flick_search}")
  # @flick.each do |k, v|
  @poster = @search["Search"][0]["Poster"]
  @title = @search["Search"][0]["Title"]# .each[:"Title"]
  @year = @search["Search"][0]["Year"]
  @imdbid = @search["Search"][0]["imdbID"]
  @type = @search["Search"][0]["Type"]
  @idlink = HTTParty.get("http://omdbapi.com/?i=#{@imdbid}")

# @imdbID = @search["Search"][imdbID]
# flicklink = HTTParty.get("http://omdbapi.com/?i=#{@imdbID}") # IMDb ID (e.g. tt1285016)

# If statement when there is only one result. use 'i' and see if i == 1(at the end of the loop), as there is only one search result.

  erb :search
end

get '/about' do # for one specific movie, when title and year is provided.
  flicktitle = params[:flicktitle].to_s
  flickyear = params[:flickyear].to_s # Or 'to_i'?
  @flick = HTTParty.get("http://omdbapi.com/?t=#{flicktitle}&y=#{flickyear}")
  @title = @flick["Title"]
  @plot = @flick["Plot"]
  @poster = @flick["Poster"]
  @year = @flick["Year"]
  @runtime = @flick["Runtime"]
  @director = @flick["Director"]
  @actors = @flick["Actors"]
  @imdb_rating = @flick["imdbRating"]

  erb :about
end

get '/info' do
#  binding.pry
  @imdbid = params["imdbId"]
  @idlink = HTTParty.get("http://omdbapi.com/?i=#{@imdbid}")
  @title = @idlink["Title"]
  @plot = @idlink["Plot"]
  @poster = @idlink["Poster"]
  @year = @idlink["Year"]
  @runtime = @idlink["Runtime"]
  @director = @idlink["Director"]
  @actors = @idlink["Actors"]
  @imdb_rating = @idlink["imdbRating"]

  erb :about
end
