require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

require_relative 'db_config'
require_relative 'models/movie'

get '/' do
  erb :index
end

post '/search' do
  @list = HTTParty.get('http://omdbapi.com/?s=' + params[:search])

  @all_results = [];

  @list["Search"].each_index do |result|
    @result = @list["Search"][result]
    @all_results << @result
  end

  if @all_results.size == 1
    redirect to "/about?title=#{@result['Title']}"
  end

  erb :search
end

get '/about' do
  open('search_history.txt', 'a') do |f|
    f.puts "#{@title}"
  end

  @cached = Movie.find_by(title: params[:title])

  @film = {}
  @cached.attributes.each do |key, value|
    @film[key] = value
    # @film[value] = Movie.value
  end

  if @cached == nil
    @info = HTTParty.get('http://omdbapi.com/?t=' + params[:title])
    @title = @info["Title"]
    @poster = @info["Poster"]
    @movie = Movie.new

    @info.each do |key, value|
      if key != "Type"
        @movie[key.downcase] = value
      else
        @movie["type_"] = value
      end
    end
    @movie.save
  else
    @movie = @cached
  end
  erb :about
end

get '/history' do
  File.open("search_history.txt", "r") do |f|
    f.each_line do |line|
      puts line
    end
  end

end
