require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :index
end

post '/search' do
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

get '/about' do
  @info = HTTParty.get('http://omdbapi.com/?t=' + params[:title])
  @title = @info["Title"]
  @poster = @info["Poster"]


  open('search_history.txt', 'a') do |f|
    f.puts "#{@title}"
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
