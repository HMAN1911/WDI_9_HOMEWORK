require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/search' do
  movie = params[:movie_name]
  # binding.pry
  # @movies = [{'Title' => 'sdfsdf'}, {'Title' => '234234'}]
  multiresult = HTTParty.get("http://omdbapi.com/?s=#{movie}")
  @movies = multiresult["Search"]
  erb :options
end

get '/get_movie' do
    # movie = params[:movie_name]
    #
    # result = HTTParty.get("http://omdbapi.com/?t=#{movie}")

    if result["Response"] == "False"
      @error = result["Error"]
      # use page error showing error message
      erb :error
    else
      # use std page
      @movie_title = result["Title"]
      @movie_plot = result["Plot"]
      @movie_poster = result["Poster"]
      @movie_year = result["Year"]
      @rating = result["Rated"]
      @cast = result["Actors"]
      @director = result["Director"]

      erb :index
    end

end
