require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  @result = {}
  erb :index
end

get '/find' do
  find_input = params["find-movie"]
  find_input.gsub!(" ", "+")
  safeURI = URI.escape("http://omdbapi.com/?t=#{find_input}")
  @result = HTTParty.get(safeURI)
  if @result["Response"] == "False"
    @result = {}
  else
    posterUrl = @result.delete("Poster")
    posterUrl == "N/A" ? @posterSrc = "" : @posterSrc = posterUrl
  end

  erb :index
end
