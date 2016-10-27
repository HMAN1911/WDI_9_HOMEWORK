require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
  erb :index
end

get '/search_results' do

    if params.length != 0
      @user_input = params[:title]
      @result = HTTParty.get('http://omdbapi.com/?s=' + @user_input)
      # binding.pry

  end
erb :search_results
end

get '/about' do

  # result_link =
  # @result = HTTParty.get('http://omdbapi.com/?t=' + result_link)

  # @poster = @result['Poster']
  # @title = @result['Title']
  # @year = @result['Year']
  # @director = @result['Director']
  # @actors = @result['Actors']
  # @plot = @result['Plot']

  erb :about
end
