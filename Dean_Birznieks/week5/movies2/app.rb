require "pry"
require "sinatra"
require "sinatra/reloader"
require 'httparty'


get '/index' do
  erb :index
end


get '/about' do
  # user_input = params[:title]
  @info = HTTParty.get('http://omdbapi.com/?t=' + params[:title])
  @title = @info["Title"]
  @year = @info["Year"]
  @rated = @info["Rated"]
  @released = @info["Released"]
  @runtime = @info["Runtime"]
  @genre = @info["Genre"]
  @director = @info["Director"]
  @writer = @info["Writer"]
  @actors = @info["Actors"]
  @plot = @info["Plot"]
  @language = @info["Language"]
  @country = @info["Country"]
  @awards = @info["Awards"]
  @poster = @info["Poster"]
  @metascore = @info["Metascore"]
  @imdbRating = @info["imdbRating"]
  @imdbVotes = @info["imdbVotes"]
  @imdbID = @info["imdbID"]
  @type = @info["Type"]

  erb :about
end


post '/search' do
  user_input = params[:search]
  @list = HTTParty.get('http://omdbapi.com/?s=' + params[:search])

  @all_results = [];

  @list["Search"].each_index do |result|
    @result = @list["Search"][result]["Title"]
    @all_results << @result
  end

  if @all_results.size == 1
    redirect to "/about?title=#{@result}"
  end

    erb :search
end

  # @title_list = list["Title"]
  # @year_list = list["Year"]

# binding.pry
