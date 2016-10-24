require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
require 'uri'


get '/' do

  erb :index
end
get '/search' do
  @search = HTTParty.get("http://omdbapi.com/?s=#{params[:search_title]}")

  if @search['Search'] == nil
    redirect to "/error"
  elsif @search['Search'].count != nil && @search['Search'].count == 1
    redirect to "/result?search_title=#{params[:search_title]}"
  else
    @list = @search['Search']
  end

  erb :search
end

get '/result' do
  @movie = HTTParty.get("http://omdbapi.com/?t=#{params[:search_title]}")
  erb :result
end

get '/about' do
  erb :about
end

get '/error' do
  erb :error
end
