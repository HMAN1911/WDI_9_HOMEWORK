require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
   erb :index
end

get '/about' do
  @result = HTTParty.get("http://omdbapi.com/?t=#{params[:title]}")



  if @result[:Response] == "True"
    @title = @result["Title"]
    erb :display
  else
    erb :index

  end
end
