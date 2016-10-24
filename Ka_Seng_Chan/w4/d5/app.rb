require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :index
end

get '/about' do
  movie = params[:movie]
  if movie.strip == ''
    redirect '/'
  else
    link = 'http://www.omdbapi.com/?t=' + movie
    @movie_data = HTTParty.get(link)
    if @movie_data["Response"] == "False"
      redirect '/'
    else
      erb :about
    end
  end
end

get '/find' do
  @movie = params[:movie].strip
  @results = HTTParty.get('http://www.omdbapi.com/?s=' + @movie)
  if @results["Response"] == "False"
    erb :find
  elsif @results['Search'].length == 1
    redirect "/about?movie=#{@results['Search'][0]['Title']}"
  elsif @results['Search'].length > 1
    erb :find
  end
end
