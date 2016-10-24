require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/index' do
  erb :index
end

get '/about' do
  flick_search = params[:flicksearch].to_s
  #num2 = params[:num2].to_f
  @flick = HTTParty.get("http://omdbapi.com/?t=#{flick_search}")
  # @flick.each do |k, v|
  #   puts
  # end
  @title = @flick["Title"]
  @plot = @flick["Plot"]
  @poster = @flick["Poster"]
  # @title = @flick["Title"]
  # @title = @flick["Title"]
  # @title = @flick["Title"]
  # @title = @flick["Title"]

  erb :about
end
