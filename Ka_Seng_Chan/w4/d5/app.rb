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
    link = 'http://omdbapi.com/?t=' + movie
    @movie_data = HTTParty.get(link)
    if @movie_data["Response"] == "False"
      redirect '/'
    else
      erb :about
    end
  end
end
