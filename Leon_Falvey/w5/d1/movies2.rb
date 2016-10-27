require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :main
end

get '/list' do
  @result = HTTParty.get("http://omdbapi.com/?s=#{params[:title]}&type=movie")
  if @result["Response"] == "True"
    @list = @result["Search"]
  else
    @result = "The Movie is a lie, so eat some cake instead."
    @list = [];
  end
  erb :index
end


get '/select' do
end

# get '/about' do
#   @result = HTTParty.get("http://omdbapi.com/?t=#{params[:title]}&plot=full&r=json")
#
#   if @result[:Response] == "True"
#     @title = @result["Title"]
#     erb :about
#   else
#     erb :index
# end
