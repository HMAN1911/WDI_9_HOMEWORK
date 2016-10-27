require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
require 'uri'
require_relative 'db_config'
require_relative 'models/movie'



get '/' do
  erb :index
end

get '/search' do
  @search = HTTParty.get("http://omdbapi.com/?s=#{params[:search_title]}")
  if @search['Search'] == nil
    redirect to "/error"
  elsif @search['Search'].count != nil && @search['Search'].count == 1
    # Unique value                 send imdbID as a parameter to show result
    redirect to "/result?search_id=#{@search["Search"][0]["imdbID"]}"
  else
    #Make a list of all the results from search
    @list = @search['Search']
  end

  erb :search
end

get '/result' do
  #attempt to find parameter in the database
  check = Movie.find_by(imdbid: params[:search_id])

  if check == nil #if it does not exists in the local database 'movies'
    result = HTTParty.get("http://omdbapi.com/?i=#{params[:search_id]}")
    @movie = Movie.new
    #Set all values from result to @movie
    result.each do |key,value|
      #Database does not accept 'type' column name, so key 'type' from the search_id
      #                 needs to be changed to 'type_'
      if key != "Type"
        @movie["#{key.downcase}"] = "#{value}"
      else
        @movie["type_"] = "#{value}"
      end
    end
    @movie.save # save in the database
  else
    @movie = check # if the movie is already in the database, get the values from it
  end

  erb :result
end

get '/about' do
  erb :about
end

get '/error' do
  erb :error
end
