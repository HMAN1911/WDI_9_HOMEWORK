require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require_relative 'db_config'
require_relative 'models/title'
require 'pry'

binding.pry

def getMovie imdbID
  result = Title.find_by(imdbid: imdbID)
  if result == nil
    search = "http://omdbapi.com/?i=#{imdbID}"
    result = HTTParty.get(search)
    title = Title.new
    title.title = result["Title"]
    title.year = result["Year"]
    title.rated = result["rated"]
    title.released = result["Released"]
    title.runtime = result["Runtime"]
    title.genre = result["Genre"]
    title.director = result["Director"]
    title.writer = result["Writer"]
    title.actors = result["Actors"]
    title.plot = result["Plot"]
    title.language = result["Language"]
    title.country = result["Country"]
    title.awards = result["Awards"]
    title.poster = result["Poster"]
    title.metascore = result["Metascore"]
    title.imdbrating = result["imdbRating"]
    title.imdbvotes = result["imdbVotes"]
    title.imdbid = result["imdbID"]
    title.filmtype = result["Type"]
    title.response = result["Response"]
    title.save
    return title
  end
  return result
end

get '/' do
  p params
  if params.length > 0
    if params[:search]
      search = "http://omdbapi.com/?s=#{params[:search]}"
      @result = HTTParty.get(search)
      p @result
      if @result["totalResults"] == "1"
        imdbID = @result["Search"][0]["imdbID"]
        @result = getMovie imdbID
      end
    end
    if params[:title]
      imdbID = params[:title]
      @result = getMovie imdbID
    end
    p @result
  else
    @result = nil
  end
  erb :index
end

get '/about' do
  erb :about
end
