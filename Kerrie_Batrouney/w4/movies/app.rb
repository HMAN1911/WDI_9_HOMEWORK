require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
get '/' do
  erb :index
end

get '/about' do
  erb :about
end


get '/get_movie' do
    movie = params[:movie_name]

    result = HTTParty.get("http://omdbapi.com/?t=#{movie}")
    if result["Response"] == "False"
      @error = result["Error"]
    else

    @movie_title = result["Title"]
    @movie_plot = result["Plot"]
    @movie_poster = result["Poster"]
    @movie_year = result["Year"]
    @rating = result["Rated"]
    @cast = result["Actors"]
    @director = result["Director"]

    end
    
    # if result["Response"] == "False"
    #   @error = result["Error"]
    #   break
    # end
    # @stock = stock.upcase
    erb :index
end
