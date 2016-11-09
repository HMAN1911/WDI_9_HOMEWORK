require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require 'active_record'
require 'pg'
require 'json'

require_relative 'models/movie.rb'

get '/' do
  erb :search
end

get '/result' do

  @search_result = params[:search_input].downcase
  @result = HTTParty.get("http://omdbapi.com/?s=#{@search_result}")
  @movies = @result['Search']

  content_type :json
  { :key1 => 'value1', :key2 => 'value2' }.to_json

  # erb :result


end
